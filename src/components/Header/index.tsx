import { PAGES } from '@/constants';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="flex w-full justify-between px-5 py-3">
        <Link href="/" className="shadow-2xs hover:shadow-lg hover:underline">
          <img src="MET.png" alt="logo" className="h-10 w-auto" />
        </Link>
        <nav className="w-full flex justify-end">
          <ul className="flex text-gray-700 font-medium gap-4">
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
