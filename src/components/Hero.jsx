import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 relative overflow-hidden flex items-center">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full top-20 right-20"></div>
      <div className="absolute w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full bottom-10 left-10"></div>

      <div className="max-w-7xl mx-auto px-8 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-cyan-400 text-lg font-medium mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7*1 font-extrabold leading-tight mb-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Kalyan Pippera
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6">
            Data Analyst | Frontend Developer
          </h2>

          <p className="text-gray-400 text-lg leading-8 max-w-xl mb-10">
            Turning raw data into business decisions using SQL, Python,
            Power BI and building modern web applications using React.
          </p>

          <div className="flex flex-wrap gap-5 mb-10">
          <button
            onClick={() => {
            const section = document.getElementById("projects");
            if (section) {
            section.scrollIntoView({ behavior: "smooth" });
             }
           }}
           className="bg-cyan-400 text-slate-900 font-semibold px-8 py-4 rounded-xl hover:scale-105 hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] transition duration-300"
          >
              View Projects
        </button>

           <a
            href="/Kalyan_Pippera_Resume.pdf"
            download
             className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition duration-300 rounded-xl font-semibold"
            >
        Download Resume
          </a>

          </div>

          <div className="flex gap-6 text-3xl text-gray-400">

            <a href="https://github.com/kalyanpippera-ui" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-cyan-400 hover:scale-125 transition" />
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-cyan-400 hover:scale-125 transition" />
            </a>

            <a href="mailto:kalyan.pippera@gmail.com">
              <FaEnvelope className="hover:text-cyan-400 hover:scale-125 transition" />
            </a>

          </div>

        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30 animate-pulse"></div>
         <img
             src="/profile.jpg"
             alt="Kalyan Pippera"
             className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.4)]"
         />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;