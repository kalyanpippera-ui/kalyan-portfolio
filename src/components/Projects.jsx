import { motion } from "framer-motion";

const projects = [
  {
    title: "Data Analytics Dashboard",
    description:
      "Interactive business dashboard built using SQL, Tableau and Python for business insights.",
    tech: "SQL • Tableau • Python",
   github:"https://github.com/kalyanpippera-ui/kalyan-portfolio",
demo:"https://kalyan-portfolio-seven.vercel.app",
  },
  {
    title: "Nursery React App",
    description:
      "E-commerce plant store built using React, Tailwind CSS and Firebase.",
    tech: "React • Tailwind • Firebase",
  github:"https://github.com/kalyanpippera-ui/kalyan-portfolio",
demo:"https://kalyan-portfolio-seven.vercel.app",
  },
  {
    title: "Movie Booking App",
    description:
      "Movie ticket booking web application with responsive UI.",
    tech: "React • JavaScript",
   github:"https://github.com/kalyanpippera-ui/kalyan-portfolio",
demo:"https://kalyan-portfolio-seven.vercel.app",
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
             whileHover={{
                 y: -12,
                 scale: 1.02,
                            }}
       className="bg-slate-900 rounded-3xl overflow-hidden p-6 border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)] transition duration-300"            >
       <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover rounded-2xl mb-6"
       />
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-5">
                {project.description}
              </p>

        <div className="flex flex-wrap gap-2 mb-8">
               {project.tech.split(" • ").map((skill) => (
             <span
               key={skill}
               className="px-3 py-1 text-sm bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 rounded-full"
             >
            {skill}
            </span>
              ))}
          </div>


            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;