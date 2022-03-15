import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from '@heroicons/react/outline';

const Sidebar = function () {
  return (
    <div className="p-5 text-sm text-gray-500">
      <div>
        <button
          type="button"
          className="flex items-center space-x-2 hover:text-white"
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
      </div>
    </div>
  );
};

export default Sidebar;
