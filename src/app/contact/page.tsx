import type { NextPage } from 'next';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';

import Header from '@/components/ui/Header';

const Page: NextPage = async () => {
  return (
    <div className="m-0 p-0 bg-gray-600">
      <Header />
      <div className="flex items-center justify-center min-h-screen　px-4 py-44">
        <div className="flex flex-col gap-6 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          <div className="flex items-center gap-4 sm:gap-5　">
            <a
              href="https://www.youtube.com/channel/UC3fr_4zBwmlve2ZqiLzTO2Q"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-zinc-500 transition-colors break-all"
            >
              <AiOutlineYoutube className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white hover:text-zinc-500 transition-colors" />
              https://www.youtube.com/channel/UC3fr_4zBwmlve2ZqiLzTO2Q
            </a>
          </div>
          <div className="border-t border-white/30 w-full" />
          <div className="flex items-center gap-4 sm:gap-5　">
            <a
              href="https://www.instagram.com/film_circle/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-zinc-500 transition-colors break-all"
            >
              <AiOutlineInstagram className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white hover:text-zinc-500 transition-colors" />
              https://www.instagram.com/film_circle/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
