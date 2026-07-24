import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

import profile from "../data/profile";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-950 pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-blue-400 text-lg font-medium mb-4">
            👋 Hello, I'm
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <div className="mt-6 text-2xl md:text-3xl font-semibold text-white min-h-[70px]">

            <TypeAnimation
              sequence={[
                "Software Developer",
                2000,
                "AI & Machine Learning Enthusiast",
                2000,
                "Computer Vision Developer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

          </div>

          <p className="mt-8 text-slate-400 text-lg leading-8 max-w-xl">
            {profile.about}
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-6">

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/40"
            >
              <FaDownload />
              Resume
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl border border-slate-700 bg-white/5 backdrop-blur-xl hover:border-blue-500 hover:scale-105 transition-all duration-300"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl border border-slate-700 bg-white/5 backdrop-blur-xl hover:border-blue-500 hover:scale-105 transition-all duration-300"
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">

            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-500">
                10+
              </h3>
              <p className="text-slate-400 mt-2">
                Projects
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-500">
                15+
              </h3>
              <p className="text-slate-400 mt-2">
                Technologies
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-green-500">
                5+
              </h3>
              <p className="text-slate-400 mt-2">
                Certificates
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-yellow-500">
                2027
              </h3>
              <p className="text-slate-400 mt-2">
                Graduate
              </p>
            </div>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="relative flex justify-center items-center animate-[float_6s_ease-in-out_infinite]">

            {/* Background Glow */}

            <div className="absolute w-[340px] h-[340px] md:w-[480px] md:h-[480px] rounded-full bg-blue-500/20 blur-3xl"></div>

            {/* Rotating Ring */}

            <div className="absolute w-[350px] h-[350px] md:w-[460px] md:h-[460px] rounded-full border-2 border-blue-500/30 animate-spin [animation-duration:20s]"></div>

            {/* Static Ring */}

            <div className="absolute w-[330px] h-[330px] md:w-[440px] md:h-[440px] rounded-full border-4 border-blue-500"></div>

            {/* Profile Image */}

            <img
              src="/profile.png"
              alt="Tikkavarapu Hema Sai"
              className="relative w-72 h-72 md:w-[420px] md:h-[420px] rounded-full object-cover object-top shadow-2xl shadow-blue-500/40"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;