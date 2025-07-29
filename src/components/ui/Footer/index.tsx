import Link from 'next/link';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';

import { PAGES, SNS_LINKS } from '@/constants';

const Footer = () => {
  return (
    <footer className="flex min-h-60 flex-col items-center bg-zinc-700 px-5 py-4 text-2xl text-white">
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-3xl">ProductionMET</span>
          <div className="flex gap-5">
            <a
              href={SNS_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 transition-colors hover:text-zinc-500"
            >
              <AiOutlineYoutube className="h-auto w-10" />
            </a>
            <a
              href={SNS_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 transition-colors hover:text-zinc-500"
            >
              <AiOutlineInstagram className="h-auto w-10" />
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          {PAGES.map((page) => (
            <Link
              key={page.text}
              href={page.href}
              className="text-gray-300 transition-colors hover:text-zinc-500"
            >
              {page.text}
            </Link>
          ))}
        </div>
      </div>
      <p>&copy; 2025 映画サークル</p>
    </footer>
  );
};

export default Footer;
