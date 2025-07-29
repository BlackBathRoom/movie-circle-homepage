import Link from 'next/link';

import { PAGES } from '@/constants';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="flex w-full justify-between px-5 py-3">
        <Link href="/" className="shadow-2xs hover:underline hover:shadow-lg">
          <img src="met-logo.webp" alt="logo" className="h-10 w-auto" />
        </Link>
        <nav className="flex w-full justify-end">
          <ul className="flex gap-4 font-medium text-gray-700">
            {PAGES.map((page) => (
              <li key={page.text}>
                <Link href={page.href} className="">
                  {page.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
