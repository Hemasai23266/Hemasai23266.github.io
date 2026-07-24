import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const education = [
  {
    year: "2023 - Present",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science and Engineering",
    college: "Amrita Vishwa Vidyapeetham",
    location: "Coimbatore, Tamil Nadu",
    description:
      "Studying Data Structures, Algorithms, Artificial Intelligence, Machine Learning, Database Management Systems, Operating Systems, Computer Networks, and Full Stack Web Development.",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="py-32 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center"
        >
          My <span className="text-blue-500">Education</span>
        </motion.h2>

        <p className="text-center text-slate-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
          My academic journey has provided a strong foundation in
          software engineering, artificial intelligence, and modern web
          technologies.
        </p>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Vertical Line */}

          <div className="absolute left-5 top-0 h-full w-1 bg-blue-500 rounded-full"></div>

          {education.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative pl-20 mb-16"
            >

              {/* Timeline Circle */}

              <div className="absolute left-0 top-5 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/40">

                <FaGraduationCap className="text-white" />

              </div>

              {/* Card */}

              <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 p-8 shadow-xl">

                <div className="flex flex-wrap gap-6 text-sm text-slate-400 mb-5">

                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-blue-400" />
                    {item.year}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaUniversity className="text-blue-400" />
                    {item.college}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-blue-400" />
                    {item.location}
                  </div>

                </div>

                <h3 className="text-3xl font-bold">
                  {item.degree}
                </h3>

                <h4 className="text-xl text-blue-400 mt-2">
                  {item.branch}
                </h4>

                <p className="text-slate-400 leading-8 mt-6">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;