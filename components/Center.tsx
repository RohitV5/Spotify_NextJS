/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ChevronDownIcon } from '@heroicons/react/outline';
import { signOut, useSession } from 'next-auth/react';
import { FC, useEffect, useState } from 'react';
import { shuffle } from 'lodash';
import { useRecoilState } from 'recoil';
import { playlistIdState, selectedPlaylistState } from '../atoms/playlistAtom';
import useSpotify from '../hooks/useSpotify';
import { PlaylistObjectFull } from '../types/spotify.types';
import Songs from './Songs';
import { ariaHandleKeyPress } from '../utils/utils';

const Center: FC = function () {
  const { data: session } = useSession();
  const [color, setColor] = useState<string>('');
  const [selectedPlaylist, setSelectedPlaylist] =
    useRecoilState<PlaylistObjectFull>(selectedPlaylistState);
  const [playlistId] = useRecoilState<string>(playlistIdState);
  const spotifyApi = useSpotify();
  // Another way to get recoil value
  // const playlistId = useRecoilValue(playlistIdState);

  const colors: string[] = [
    'from-yellow-500',
    'from-indigo-500',
    'from-blue-500',
    'from-green-500',
    'from-red-500',
    'from-pink-500',
    'from-purple-500',
    'from-orange-500',
    'from-torquise-500',
  ];

  useEffect(() => {
    setColor(shuffle(colors).pop() || '');
  }, [playlistId]);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi
        .getPlaylist(playlistId)
        .then((data) => {
          setSelectedPlaylist(data.body);
        })
        .catch((err) => {
          throw err;
        });
    }
  }, [spotifyApi, playlistId]);

  return (
    <div className="flex-grow h-screen overflow-y-scroll scrollbar-hide">
      <header className="absolute top-5 right-8">
        <div
          className="flex items-center p-1 pr-2 space-x-3 text-white bg-black rounded-full cursor-pointer opacity-90 hover:opacity-80"
          onClick={() => {
            signOut();
          }}
          onKeyPress={($event) => ariaHandleKeyPress($event, signOut)}
        >
          <img
            className="w-10 h-10 rounded-full"
            src={session?.user?.image || '/fallback-user-img.jpg'}
            alt="user_image"
          />
          <h2>{session?.user?.name}</h2>
          <ChevronDownIcon className="w-5 h-5" />
        </div>
      </header>

      <section
        className={`flex items-end space-x-7 bg-gradient-to-b  ${color} to-black h-80 text-white p-8`}
      >
        <img
          className="shadow-2xl h-44 w-44"
          src={selectedPlaylist?.images?.[0]?.url}
          alt=""
        />
        <div>
          <p>PLAYLIST</p>
          <h1 className="text-2xl font-bold md:text-3xl xl:text-5xl">
            {selectedPlaylist?.name}
          </h1>
        </div>
      </section>
      <div>
        <Songs />
      </div>
    </div>
  );
};

export default Center;
