import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from '@heroicons/react/outline';
import { signOut } from 'next-auth/react';

const Sidebar = function () {
  // const { data: session, status } = useSession();
  return (
    <div className="p-5 text-sm text-gray-500">
      <div>
        <button
          type="button"
          className="flex items-center space-x-2 hover:text-white"
          onClick={() => signOut()}
        >
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button
          type="button"
          className="flex items-center space-x-2 hover:text-white"
        >
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button
          type="button"
          className="flex items-center space-x-2 hover:text-white"
        >
          <LibraryIcon className="h-5 w-5" />
          <p>Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />
        <button
          type="button"
          className="flex items-center space-x-2 hover:text-white"
        >
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>
        <button
          type="button"
          className="flex items-center space-x-2 hover:text-white"
        >
          <HeartIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>
        <button
          type="button"
          className="flex items-center space-x-2 hover:text-white"
        >
          <RssIcon className="h-5 w-5" />
          <p>Your episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        {/* Playlists... */}
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
        <p className="cursor-pointer hover:text-white">Playlist name...</p>
      </div>
    </div>
  );
};

export default Sidebar;
