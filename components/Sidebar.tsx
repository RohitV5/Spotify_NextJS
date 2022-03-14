import {
  HomeIcon,
  // SearchIcon,
  // LibraryIcon,
  // PlusCircleIcon,
} from '@heroicons/react/outline';

const Sidebar = function () {
  return (
    <div>
      <div>
        <button type="button">
          <HomeIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
