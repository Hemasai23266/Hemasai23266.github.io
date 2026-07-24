import { motion } from "framer-motion";
import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
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
          My <span className="text-blue-500">Skills</span>
        </motion.h2>

        <p className="text-center text-slate-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
          Here are the technologies, programming languages, frameworks,
          and tools I use to build scalable web applications and
          AI-powered solutions.
        </p>

        {/* Skills Grid */}

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                bg-white/5
                backdrop-blur-xl
                rounded-3xl
                p-7
                border
                border-white/10
                hover:border-blue-500
                hover:shadow-blue-500/20
                shadow-xl
                transition-all
                duration-300
              "
            >

              {/* Top */}

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-4">

                  <div className="text-4xl">
                    {skill.icon}
                  </div>

                  <div>

                    <h3 className="text-xl font-bold">
                      {skill.name}
                    </h3>

                    <p className="text-slate-400 text-sm mt-1">
                      Professional Skill
                    </p>

                  </div>

                </div>

                <div className="text-blue-400 font-bold text-xl">
                  {skill.level}%
                </div>

              </div>

              {/* Progress */}

              <div className="mt-6">

                <div className="w-full h-3 rounded-full bg-slate-700 overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${skill.level}%`,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    className="h-3 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500"
                  />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;