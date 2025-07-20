import { PAGES } from '@/constants';
import Link from 'next/link';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-zinc-700 text-white flex flex-col items-center py-4 min-h-60 text-2xl px-5">
      <div className="flex w-full justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-3xl">ProductionMET</span>
          <div className="flex gap-5">
            <a
              href="https://www.youtube.com/channel/UC3fr_4zBwmlve2ZqiLzTO2Q"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-zinc-500 transition-colors"
            >
              <AiOutlineYoutube className="w-10 h-auto" />
            </a>
            <a
              href="https://www.instagram.com/film_circle/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-zinc-500 transition-colors"
            >
              <AiOutlineInstagram className="w-10 h-auto" />
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          {PAGES.map((page) => (
            <Link
              key={page.text}
              href={page.href}
              className="text-gray-300 hover:text-zinc-500 transition-colors"
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
