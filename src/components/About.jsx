import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-950 flex items-center py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-10 border border-cyan-500/20 shadow-lg"
        >
          <p className="text-gray-300 text-lg leading-9">

            I'm <span className="text-cyan-400 font-semibold">Kalyan Pippera</span>,
            a Data Analyst with <span className="text-cyan-400">3 years of professional experience</span>
            transforming raw data into meaningful business insights.

            <br /><br />

            I hold a <span className="text-cyan-400">Master's degree in Information Systems</span> and have
            worked extensively with SQL, Python, Tableau, Power BI, Excel, and Business Intelligence tools to
            build interactive dashboards, automate reports, and support data-driven decision making.

            <br /><br />

            Alongside analytics, I enjoy building modern web applications using React and creating clean,
            responsive user interfaces.

            <br /><br />

            I'm currently seeking <span className="text-cyan-400">Data Analyst opportunities in Dubai</span>
            where I can contribute my analytical skills, collaborate with great teams, and continue growing professionally.

          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default About;