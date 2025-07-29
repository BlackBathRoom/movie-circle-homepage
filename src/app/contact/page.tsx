import type { NextPage } from 'next';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';

import { SNS_LINKS } from '@/constants';

const Page: NextPage = async () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-44">
      <div className="flex flex-col gap-6 text-lg sm:text-xl md:text-2xl lg:text-3xl">
        <div className="flex items-center gap-4 sm:gap-5">
          <a
            href={SNS_LINKS.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all text-white transition-colors hover:text-zinc-500"
          >
            <AiOutlineYoutube className="h-8 w-8 text-white transition-colors hover:text-zinc-500 sm:h-10 sm:w-10 md:h-12 md:w-12" />
            https://www.youtube.com/channel/UC3fr_4zBwmlve2ZqiLzTO2Q
          </a>
        </div>
        <div className="w-full border-t border-white/30" />
        <div className="flex items-center gap-4 sm:gap-5">
          <a
            href={SNS_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all text-white transition-colors hover:text-zinc-500"
          >
            <AiOutlineInstagram className="h-8 w-8 text-white transition-colors hover:text-zinc-500 sm:h-10 sm:w-10 md:h-12 md:w-12" />
            https://www.instagram.com/film_circle/
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
