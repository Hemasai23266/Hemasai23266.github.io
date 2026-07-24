import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaProjectDiagram,
  FaCertificate,
  FaGraduationCap,
} from "react-icons/fa";
import profile from "../data/profile";

function About() {
  return (
    <section
      id="about"
      className="py-32 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center"
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        <p className="text-center text-slate-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
          A passionate Computer Science student who enjoys building
          intelligent software solutions and modern web applications.
        </p>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <h3 className="text-3xl font-bold mb-6">
              Who am I?
            </h3>

            <p className="text-slate-400 text-lg leading-9">
              {profile.about}
            </p>

            <p className="text-slate-400 text-lg leading-9 mt-6">
              I enjoy solving real-world problems through Artificial
              Intelligence, Machine Learning, Computer Vision, and Full
              Stack Development. I continuously improve my skills by
              building projects and learning modern technologies.
            </p>

            {/* Statistics */}

            <div className="grid grid-cols-2 gap-6 mt-12">

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/10">
                <FaProjectDiagram className="mx-auto text-4xl text-blue-500 mb-3" />
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="text-slate-400 mt-2">
                  Projects
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/10">
                <FaCertificate className="mx-auto text-4xl text-purple-500 mb-3" />
                <h3 className="text-3xl font-bold">5+</h3>
                <p className="text-slate-400 mt-2">
                  Certifications
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/10">
                <FaCode className="mx-auto text-4xl text-green-500 mb-3" />
                <h3 className="text-3xl font-bold">15+</h3>
                <p className="text-slate-400 mt-2">
                  Technologies
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/10">
                <FaGraduationCap className="mx-auto text-4xl text-yellow-500 mb-3" />
                <h3 className="text-3xl font-bold">2027</h3>
                <p className="text-slate-400 mt-2">
                  Graduation
                </p>
              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2">
              <FaCode className="text-5xl text-blue-500 mb-5" />

              <h3 className="text-2xl font-bold mb-3">
                Software Development
              </h3>

              <p className="text-slate-400 leading-7">
                Building responsive, scalable, and user-friendly web
                applications using modern technologies.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2">
              <FaBrain className="text-5xl text-purple-500 mb-5" />

              <h3 className="text-2xl font-bold mb-3">
                Artificial Intelligence
              </h3>

              <p className="text-slate-400 leading-7">
                Interested in Deep Learning, Computer Vision, Neural
                Networks, and intelligent automation systems.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-green-500 transition-all duration-300 hover:-translate-y-2">
              <FaLaptopCode className="text-5xl text-green-500 mb-5" />

              <h3 className="text-2xl font-bold mb-3">
                Full Stack Development
              </h3>

              <p className="text-slate-400 leading-7">
                Developing modern applications with React, Node.js,
                Express, REST APIs, SQL, and NoSQL databases.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;