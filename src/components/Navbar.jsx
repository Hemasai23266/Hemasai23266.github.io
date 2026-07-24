import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import navigation from "../data/navigation";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#home"
          className="flex items-center gap-3"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center font-bold text-lg shadow-lg">
            THS
          </div>

          <div className="hidden md:block">
            <h2 className="font-bold text-white">
              Tikkavarapu Hema Sai
            </h2>

            <p className="text-sm text-slate-400">
              Software Developer
            </p>
          </div>
        </a>

        {/* Desktop Menu */}

        <nav className="hidden lg:flex items-center gap-8">

          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="text-slate-300 hover:text-blue-400 transition duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}

        </nav>

        {/* Desktop Icons */}

        <div className="hidden lg:flex items-center gap-5">

          <a
            href="https://github.com/Hemasai23266"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-blue-400 transition duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-blue-400 transition duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl text-white"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden bg-slate-900 border-t border-slate-800 overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >

        <div className="flex flex-col items-center gap-6">

          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 hover:text-blue-400 text-lg transition"
            >
              {item.name}
            </a>
          ))}

          <div className="flex gap-6 pt-4">

            <a
              href="https://github.com/Hemasai23266"
              target="_blank"
              rel="noreferrer"
              className="text-3xl hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-3xl hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;