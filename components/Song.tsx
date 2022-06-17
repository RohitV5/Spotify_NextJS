import React, { FC } from 'react';
import { useRecoilState } from 'recoil';
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom';
import spotifyApi from '../lib/spotify';
import { PlaylistTrackObject } from '../types/spotify.types';
import { ariaHandleKeyPress, millisToMinutesAndSeconds } from '../utils/utils';

const Song: FC<{
  order: number;
  track: PlaylistTrackObject;
}> = function ({ order, track }) {
  const [, setCurrentTrackId] = useRecoilState(currentTrackIdState);
  const [, setIsPlaying] = useRecoilState(isPlayingState);

  const playSong = () => {
    setCurrentTrackId(track?.track?.id);
    setIsPlaying(true);
    spotifyApi.play({
      uris: [track?.track?.uri],
    });
  };
  return (
    <div
      role="button"
      tabIndex={0}
      className="grid grid-cols-2 px-5 py-4 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-900"
      onClick={() => {
        playSong();
      }}
      onKeyPress={($event) => {
        ariaHandleKeyPress($event, playSong);
      }}
    >
      <div className="flex items-center space-x-4 ">
        <p>{order + 1}</p>
        <img
          className="w-10 h-10"
          src={track?.track?.album?.images[0].url}
          alt="album art"
        />
        <div>
          <p className="text-white truncate w-36 lg:w-64">
            {track?.track?.name}
          </p>
          <p className="w-40">{track?.track?.artists[0].name}</p>
        </div>
      </div>

      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="hidden w-40 md:inline">{track?.track?.album?.name}</p>
        <p>{millisToMinutesAndSeconds(track?.track?.duration_ms)} </p>
      </div>
    </div>
  );
};

export default Song;
