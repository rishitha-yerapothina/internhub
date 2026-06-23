import { Link } from "react-router-dom";
import { Briefcase } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-600">
            <Briefcase size={18} />
          </div>

          <span className="text-xl font-bold text-white">
            InternHub
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>

          <Link to="/overview" className="hover:text-white transition">
            Overview
          </Link>

          <Link to="/internships" className="hover:text-white transition">
            Internships
          </Link>

          <Link to="/analytics" className="hover:text-white transition">
            Analytics
          </Link>

          <Link to="/resources" className="hover:text-white transition">
            Resources
          </Link>

          
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/add"
            className="hidden rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-purple-700 md:block"
          >
            Add Application
          </Link>

          <Link
            to="/signin"
            className="hidden rounded-full border border-white/10 px-5 py-2 text-sm text-white transition hover:bg-white hover:text-black md:block"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;