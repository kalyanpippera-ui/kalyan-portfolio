function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

      <p className="text-cyan-400 text-lg mb-4">
        👋 Hello, I'm
      </p>

      <h1 className="text-6xl md:text-7xl font-bold mb-6">
        Kalyan Pippera
      </h1>

      <h2 className="text-2xl text-gray-300 mb-4">
        Data Analyst
      </h2>

      <p className="max-w-2xl text-gray-400 text-lg leading-8 mb-10">
        Turning Data into Business Decisions using SQL, Python,
        Power BI, Tableau, and Business Intelligence solutions.
      </p>

      <div className="flex gap-6">

        <button className="bg-cyan-500 text-slate-900 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-400 transition">
          View Projects
        </button>

        <button className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-xl hover:bg-cyan-500 hover:text-slate-900 transition">
          Download Resume
        </button>

      </div>

    </section>
  );
}

export default Hero;