import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom';
import useSongInfo from '../hooks/useSongInfo';
import useSpotify from '../hooks/useSpotify';

const Player = function () {
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [volume, setVolume] = useState<number>(50);
  const songInfo = useSongInfo();

  const fetchCurrentSong = () => {
    if (!songInfo) {
      spotifyApi
        .getMyCurrentPlayingTrack()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .then((data) => {
          // console.log('Now playing ' + data?.body?.item);
          setCurrentTrackId(data.body?.item?.id);

          spotifyApi.getMyCurrentPlaybackState().then((data1) => {
            setIsPlaying(data1?.body?.is_playing);
          });
        });
    }
  };

  useEffect(() => {
    if (spotifyApi.getAccessToken() && !currentTrackId) {
      fetchCurrentSong();
      setVolume(50);
      if (isPlaying && volume) {
        // remove this block
      }
    }
  }, [currentTrackId, spotifyApi, session]);

  return (
    <div className="grid h-24 grid-cols-3 px-2 text-xs text-white bg-gradient-to-b from-black to-gray-900 md:text-base md:px-8">
      {/* left */}
      <div className="flex items-center space-x-4">
        <img
          className="hidden w-10 h-10 md:inline"
          src={songInfo?.album?.images?.[0]?.url}
          alt="track album art"
        />
        <div>
          <h3>{songInfo?.name}</h3>
          <p>{songInfo?.artists?.[0].name}</p>
        </div>
      </div>
    </div>
  );
};

export default Player;
