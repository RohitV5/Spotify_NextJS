import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedPlaylistState } from '../atoms/playlistAtom';
import Song from './Song';

const Songs: FC = function () {
  const playlist = useRecoilValue(selectedPlaylistState);
  return (
    <div className="flex flex-col px-8 space-y-1 text-white pb-28">
      {playlist?.tracks?.items?.map((track, index) => (
        <Song key={`track-${index}`} track={track} order={index} />
      ))}
    </div>
  );
};

export default Songs;
