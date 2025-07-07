import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-center">
        <ul className="flex space-x-24 text-gray-700 font-medium">
          <li>
            <Link
              href="#works"
              className="shadow-2xs hover:shadow-lg hover:underline"
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              href="about"
              className="shadow-2xs hover:shadow-lg hover:underline"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#goods"
              className="shadow-2xs hover:shadow-lg hover:underline"
            >
              Goods
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
