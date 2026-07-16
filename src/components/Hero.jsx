import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 relative overflow-hidden flex items-center">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full top-20 right-20"></div>
      <div className="absolute w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full bottom-10 left-10"></div>

     <div className="max-w-7xl mx-auto px-8 lg:px-12 grid lg:grid-cols-2 gap-24 items-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-cyan-400 text-lg font-medium mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7x1 font-extrabold leading-tight mb-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Kalyan Pippera
          </h1>
<TypeAnimation
  sequence={[
    "Data Analyst", 2000,
    "Power BI Developer", 2000,
    "SQL Specialist", 2000,
    "React Developer", 2000,
  ]}
  wrapper="h2"
  speed={50}
  repeat={Infinity}
  className="text-2xl md:text-3xl font-semibold text-cyan-400 mb-6"
/>
        
<p className="text-gray-400 text-lg leading-8 max-w-xl mb-14">
           Transforming complex data into actionable business insights using
          <span className="text-cyan-400 font-semibold"> SQL</span>,
          <span className="text-cyan-400 font-semibold"> Python</span>,
          <span className="text-cyan-400 font-semibold"> Power BI</span>,
          <span className="text-cyan-400 font-semibold"> Tableau</span>,
            and modern React applications.
        </p>

<div className="grid grid-cols-3 gap-6 max-w-xl mb-14">
  <div className="bg-slate-900 border border-cyan-500/20 rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-cyan-400">3+</h3>
    <p className="text-gray-400 text-sm mt-2">Years Experience</p>
  </div>

  <div className="bg-slate-900 border border-cyan-500/20 rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-cyan-400">100+</h3>
    <p className="text-gray-400 text-sm mt-2">Dashboards</p>
  </div>

  <div className="bg-slate-900 border border-cyan-500/20 rounded-2xl p-5 text-center">
    <h3 className="text-3xl font-bold text-cyan-400">20+</h3>
    <p className="text-gray-400 text-sm mt-2">Business Reports</p>
  </div>

</div>
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

          <div className="flex gap-6 text-3xl mt-6">

           <a
    href="https://github.com/kalyanpippera-ui"
    target="_blank"
    rel="noreferrer"
    className="text-gray-400 hover:text-cyan-400 hover:scale-125 transition duration-300"
           >
      <FaGithub />
      </a>

      <a
    href="https://www.linkedin.com/in/kalyan-pippera-bb42aa230/"
    target="_blank"
    rel="noreferrer"
    className="text-gray-400 hover:text-cyan-400 hover:scale-125 transition duration-300"
     >
     <FaLinkedin />
     </a>

  <a
    href="mailto:kalyan.pippera@gmail.com"
    className="text-gray-400 hover:text-cyan-400 hover:scale-125 transition duration-300"
  >
    <FaEnvelope />
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

          <div className="relative flex justify-center items-center">

    {/* Outer Glow */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-500/20 blur-[120px]"></div>

    {/* Rotating Border */}
          <div className="absolute w-[360px] h-[360px] rounded-full border-2 border-cyan-400/30 animate-spin"
           style={{ animationDuration: "12s" }}>
          </div>

    {/* Profile */}
        <img
          src="/profile.jpg"
          alt="Kalyan Pippera"
          className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_80px_rgba(34,211,238,0.45)] hover:scale-105 transition duration-500"
        />

  </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;