import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from '@heroicons/react/outline';
import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import useSpotify from '../hooks/useSpotify';
import { PlaylistObjectSimplified } from '../types/spotify.types';

const Sidebar = function () {
  // const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState<PlaylistObjectSimplified[]>();
  const spotifyApi = useSpotify();
  // console.log(session)

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, []);

  return (
    <div className="h-screen p-5 overflow-y-scroll text-sm text-gray-500 border-r border-gray-900 scrollbar-hide">
      <div>
        <button
          type="button"
          className="flex items-center space-x-2 hover:text-white"
          onClick={() => signOut()}
        >
          <HomeIcon className="w-5 h-5" />
          <p>Home</p>
        </button>
        <button
          type="button"
          className="flex items-center space-x-2 hover:text-white"
        >
          <SearchIcon className="w-5 h-5" />
          <p>Search</p>
        </button>
        <button
          type="button"
          className="flex items-center space-x-2 hover:text-white"
        >
          <LibraryIcon className="w-5 h-5" />
          <p>Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        <button
          type="button"
          className="flex items-center space-x-2 hover:text-white"
        >
          <PlusCircleIcon className="w-5 h-5" />
          <p>Create Playlist</p>
        </button>
        <button
          type="button"
          className="flex items-center space-x-2 hover:text-white"
        >
          <HeartIcon className="w-5 h-5" />
          <p>Liked Songs</p>
        </button>
        <button
          type="button"
          className="flex items-center space-x-2 hover:text-white"
        >
          <RssIcon className="w-5 h-5" />
          <p>Your episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        {/* Playlists... */}
        {playlists?.map((playlist) => (
          <p key={playlist.id} className="cursor-pointer hover:text-white">
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
