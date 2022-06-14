import { ChevronDownIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import { FC, useEffect, useState } from 'react';
import { shuffle } from 'lodash';

const Center: FC = function () {
  const { data: session } = useSession();
  const [color, setColor] = useState<string>('');

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
  }, []);

  return (
    <div className="flex-grow text-white ">
      <header className="absolute top-5 right-8">
        <div className="flex items-center p-1 pr-2 space-x-3 bg-black rounded-full cursor-pointer opacity-90 hover:opacity-80">
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
        className={`flex items-end space-x-7 bg-gradient-to-b  ${color} to-black h-80 text-white padding-8`}
      >
        <img src="" alt="" />
        <h1>Hello</h1>
      </section>
    </div>
  );
};

export default Center;
