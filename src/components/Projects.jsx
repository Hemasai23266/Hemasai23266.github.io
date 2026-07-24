import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="py-32 bg-slate-900/70 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center"
        >
          Featured <span className="text-blue-500">Projects</span>
        </motion.h2>

        <p className="text-center text-slate-400 mt-6 max-w-3xl mx-auto text-base md:text-lg leading-8">
          Explore some of my favorite projects focused on Artificial
          Intelligence, Computer Vision, Full Stack Development, and
          Machine Learning.
        </p>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20">

          {projects.map((project) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4 }}
              className="
                bg-white/5
                backdrop-blur-xl
                rounded-3xl
                overflow-hidden
                border
                border-white/10
                shadow-2xl
                hover:border-blue-500
                hover:shadow-blue-500/20
                transition-all
                duration-500
              "
            >

              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                />

              </div>

              {/* Content */}

              <div className="p-7">

                {project.featured && (

                  <span className="inline-block mb-4 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-semibold">

                    ⭐ Featured Project

                  </span>

                )}

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-5 leading-7 min-h-[120px]">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-3 mt-6">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-medium
                        border
                        border-blue-500/20
                        bg-gradient-to-r
                        from-blue-500/20
                        to-purple-500/20
                        text-blue-300
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-4 mt-8">

                  {project.github && (

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex-1
                        flex
                        justify-center
                        items-center
                        gap-2
                        px-5
                        py-3
                        rounded-xl
                        bg-blue-600
                        hover:bg-blue-700
                        font-semibold
                        transition-all
                        duration-300
                      "
                    >
                      <FaGithub />

                      GitHub

                    </a>

                  )}

                  {project.demo && (

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex-1
                        flex
                        justify-center
                        items-center
                        gap-2
                        px-5
                        py-3
                        rounded-xl
                        border
                        border-slate-600
                        hover:border-green-500
                        font-semibold
                        transition-all
                        duration-300
                      "
                    >
                      <FaExternalLinkAlt />

                      Demo

                    </a>

                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;
