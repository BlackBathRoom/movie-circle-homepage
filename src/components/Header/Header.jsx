const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-center">
        <ul className="flex space-x-24 text-gray-700 font-medium">
          <li>
            <a
              href="#works"
              className="shadow-2xs hover:shadow-lg hover:underline"
            >
              Works
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="shadow-2xs hover:shadow-lg hover:underline"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="shadow-2xs hover:shadow-lg hover:underline"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
