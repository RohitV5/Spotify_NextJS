import React, { FC } from 'react';
import { PlaylistTrackObject } from '../types/spotify.types';

const Song: FC<{
  order: number;
  track: PlaylistTrackObject;
}> = function ({ order, track }) {
  return (
    <div className="grid grid-cols-2">
      <div className="flex items-center space-x-4 ">
        <p>{order + 1}</p>
        <img
          className="w-10 h-10"
          src={track?.track?.album?.images[0].url}
          alt="album art"
        />
        <div>
          <p>{track?.track?.name}</p>
          <p>{track?.track?.artists[0].name}</p>
        </div>
      </div>

      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="hidden md:inline">{track?.track?.album?.name}</p>
        <p>duration </p>
      </div>
    </div>
  );
};

export default Song;
