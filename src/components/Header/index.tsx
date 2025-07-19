import { PAGES } from '@/constants';
import Link from 'next/link';

const Header = () => {
  return (
    <header className=" bg-white shadow-md">
      <nav className="gap-4 px-5 py-3">
        <ul className="flex space-x-24 text-gray-700 font-medium">
          <div className="flex w-full justify-between">
            <Link
              href="/"
              className="shadow-2xs hover:shadow-lg hover:underline"
            >
              <img src="MET.png" alt="logo" className="h-10 w-auto" />
            </Link>
          </div>
          <div className="gap-4 flex items-center">
            {PAGES.map((page) => (
              <Link key={page.text} href={page.href} className="">
                {page.text}
              </Link>
            ))}
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
