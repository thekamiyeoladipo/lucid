import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-gray-900/90 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-2xl">
            Lucid
          </Link>

         <Link to="/" className="text-white font-bold text-2xl">
            Lucid
          </Link>

          <div className="flex items-center md:hidden gap-2">
            {/* Always-visible mobile button */}
            <Link
              to="/new"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 rounded-full text-white font-medium hover:opacity-90 transition"
            >
              ＋ New Dream
            </Link>

            {/* Hamburger toggle button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop nav links */}
          <ul className="hidden md:flex gap-8 items-center text-white">
            <li>
              <Link to="/dreams" className="hover:text-purple-300 transition">
                Dreams
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-purple-300 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/new"
                className="bg-gradient-to-r from-purple-500 to-indigo-500 px-4 py-2 rounded-full text-white font-medium hover:opacity-90 transition"
              >
                ＋ New Dream
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Animated mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        } backdrop-blur-lg bg-gray-900/90 px-4`}
      >
        <ul className="flex flex-col gap-4 py-4 text-white text-lg">
          <li>
            <Link to="/dreams" onClick={() => setIsOpen(false)}>
              Dreams
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => setIsOpen(false)}>
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
