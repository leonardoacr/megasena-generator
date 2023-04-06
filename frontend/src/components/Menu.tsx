import { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="fixed left-0 top-0 z-50 mt-1 rounded-r-lg p-4 text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>
      <div
        className={`fixed left-0 top-0 h-screen w-64 transform bg-gray-900 transition-all duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="mt-16 p-4 px-4">
          <li className="mb-2">
            <a className="block px-4 py-2 font-bold text-white hover:bg-gray-800">
              Fake Menu
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-gray-800"
            >
              Home
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-gray-800"
            >
              Dashboard
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-gray-800"
            >
              Profile
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-gray-800"
            >
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
