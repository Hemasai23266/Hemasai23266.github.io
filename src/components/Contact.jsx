import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

import profile from "../data/profile";

function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center"
        >
          Get In <span className="text-blue-500">Touch</span>
        </motion.h2>

        <p className="text-center text-slate-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
          I am always interested in internship opportunities,
          freelance work, collaborations, and exciting software
          engineering projects.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 hover:border-blue-500 transition-all duration-300">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
                  <FaEnvelope className="text-2xl" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Email
                  </h3>

                  <a
                    href={`mailto:${profile.email}`}
                    className="text-slate-400 hover:text-blue-400"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 hover:border-green-500 transition-all duration-300">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-2xl" />
                </div>

                <div>
                  <h3 className="text-xl font-bold">
                    Location
                  </h3>

                  <p className="text-slate-400">
                    India
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-5 pt-4">

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-500 transition-all duration-300 p-5 flex justify-center items-center gap-3"
              >
                <FaGithub className="text-2xl" />
                GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-blue-500 transition-all duration-300 p-5 flex justify-center items-center gap-3"
              >
                <FaLinkedin className="text-2xl" />
                LinkedIn
              </a>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">

              <h3 className="text-3xl font-bold mb-8">
                Let's Connect
              </h3>

              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-slate-800 rounded-xl px-5 py-4 outline-none border border-slate-700 focus:border-blue-500"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-slate-800 rounded-xl px-5 py-4 outline-none border border-slate-700 focus:border-blue-500"
                />

                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="w-full bg-slate-800 rounded-xl px-5 py-4 outline-none border border-slate-700 focus:border-blue-500 resize-none"
                />

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 font-semibold text-lg"
                >
                  Send Message
                </button>

              </form>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;