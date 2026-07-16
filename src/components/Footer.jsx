function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-cyan-500/20 py-8">
      <div className="max-w-7xl mx-auto text-center text-gray-400">

        <p className="text-lg">
          © {new Date().getFullYear()} Kalyan Pippera
        </p>

        <p className="mt-2">
          Built with React • Tailwind CSS • Framer Motion
        </p>

      </div>
    </footer>
  );
}

export default Footer;