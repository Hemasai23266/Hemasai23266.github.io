import {
  FaGithub,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

import profile from "../data/profile";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Logo */}

        <div className="flex justify-center">

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-2xl font-bold shadow-lg">
            THS
          </div>

        </div>

        {/* Name */}

        <h2 className="text-3xl font-bold text-center mt-6">
          Tikkavarapu Hema Sai
        </h2>

        <p className="text-center text-slate-400 mt-3 max-w-2xl mx-auto">
          Passionate Software Developer focused on Artificial Intelligence,
          Machine Learning, Computer Vision, and Full Stack Development.
        </p>

        {/* Social Links */}

        <div className="flex justify-center gap-6 mt-8">

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full bg-slate-800 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center text-2xl"
          >
            <FaGithub />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full bg-slate-800 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center text-2xl"
          >
            <FaLinkedin />
          </a>

        </div>

        {/* Divider */}

        <div className="border-t border-slate-800 mt-12 pt-8">

          <p className="text-center text-slate-500">

            © {year} Tikkavarapu Hema Sai. All Rights Reserved.

          </p>

          <p className="text-center text-slate-500 mt-4 flex justify-center items-center gap-2">

            Made with
            <FaHeart className="text-red-500" />
            using React & Tailwind CSS

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;