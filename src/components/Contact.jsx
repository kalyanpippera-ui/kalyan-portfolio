import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Let's <span className="text-cyan-400">Connect</span>
        </motion.h2>

        <p className="text-gray-400 text-lg mb-12">
          I'm currently seeking Data Analyst opportunities in Dubai and am open to relocation.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <a
            href="mailto:kalyan.pippera@gmail.com"
            className="bg-slate-900 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400 transition"
          >
            <FaEnvelope className="text-cyan-400 text-3xl mx-auto mb-3" />
            <p className="text-white">kalyan.pippera@gmail.com</p>
          </a>

          <a
            href="https://github.com/kalyanpippera-ui"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400 transition"
          >
            <FaGithub className="text-cyan-400 text-3xl mx-auto mb-3" />
            <p className="text-white">GitHub</p>
          </a>

          <a
            href="https://www.linkedin.com/in/kalyan-pippera-bb42aa230/"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-900 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400 transition"
          >
            <FaLinkedin className="text-cyan-400 text-3xl mx-auto mb-3" />
            <p className="text-white">LinkedIn</p>
          </a>

          <a
            href="/Kalyan_Pippera_Resume.pdf"
            download
            className="bg-slate-900 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400 transition"
          >
            <FaFileDownload className="text-cyan-400 text-3xl mx-auto mb-3" />
            <p className="text-white">Download Resume</p>
          </a>

        </div>

        <div className="mt-10 flex justify-center items-center gap-2 text-cyan-400">
          <FaMapMarkerAlt />
          <span>Hyderabad, India • Open to Relocate to Dubai</span>
        </div>

      </div>
    </section>
  );
}

export default Contact;