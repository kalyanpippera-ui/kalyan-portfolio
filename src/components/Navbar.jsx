function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-cyan-400">
            KP
          </h1>
        </div>

        {/* Navigation */}
<ul className="flex items-center gap-8 text-gray-300 font-medium">          <li className="hover:text-cyan-400 cursor-pointer transition">About</li>
          <li className="hover:text-cyan-400 cursor-pointer transition">Skills</li>
          <li className="hover:text-cyan-400 cursor-pointer transition">Experience</li>
          <li className="hover:text-cyan-400 cursor-pointer transition">Projects</li>
          <li className="hover:text-cyan-400 cursor-pointer transition">Contact</li>
        </ul>

        {/* Resume Button */}
        <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 px-5 py-2 rounded-lg font-semibold transition">
          Resume
        </button>

      </nav>
    </header>
  );
}

export default Navbar;