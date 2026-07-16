import { motion } from "framer-motion";

const skills = [
  "SQL",
  "Python",
  "Power BI",
  "Tableau",
  "React",
  "JavaScript",
  "Excel",
  "PostgreSQL",
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900 border border-cyan-500/20 rounded-2xl p-6 text-center font-semibold text-white hover:border-cyan-400 transition"
            >
              {skill}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;