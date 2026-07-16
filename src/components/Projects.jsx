import { motion } from "framer-motion";

const projects = [
  {
    title: "Data Analytics Dashboard",
    description:
      "Interactive business dashboard built using SQL, Tableau and Python for business insights.",
    tech: "SQL • Tableau • Python",
    github: "#",
    demo: "#",
  },
  {
    title: "Nursery React App",
    description:
      "E-commerce plant store built using React, Tailwind CSS and Firebase.",
    tech: "React • Tailwind • Firebase",
    github: "#",
    demo: "#",
  },
  {
    title: "Movie Booking App",
    description:
      "Movie ticket booking web application with responsive UI.",
    tech: "React • JavaScript",
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -10 }}
              className="bg-slate-900 rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400 transition"
            >

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-5">
                {project.description}
              </p>

              <p className="text-cyan-400 font-semibold mb-8">
                {project.tech}
              </p>

              <div className="flex gap-4">

                <a
                  href={project.github}
                  className="bg-cyan-400 text-slate-900 px-5 py-2 rounded-lg font-semibold"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="border border-cyan-400 text-cyan-400 px-5 py-2 rounded-lg"
                >
                  Live Demo
                </a>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;