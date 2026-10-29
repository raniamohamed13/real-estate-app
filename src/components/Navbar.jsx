
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = (path) =>
    `block border-b-2 py-2 transition duration-300 ${
      location.pathname === path
        ? "border-red-900 text-red-900"
        : "border-transparent text-gray-500 hover:text-red-900"
    }`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
        <Link to="/home" onClick={closeMenu}>
          <img
            src={logo}
            alt="Grand Atlas Logo"
            className="h-auto w-12 object-contain sm:w-16"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-5 text-base font-semibold lg:flex xl:gap-8 xl:text-lg">
          <Link to="/home" className={linkStyle("/home")}>Home</Link>
          <Link to="/units" className={linkStyle("/units")}>Units</Link>
          <Link to="/zones" className={linkStyle("/zones")}>Zones</Link>
          <Link to="/developers" className={linkStyle("/developers")}>Developers</Link>
          <Link to="/contactus" className={linkStyle("/contactus")}>Contact Us</Link>
        </div>

        <Link
          to="/register"
          className="ml-auto mr-3 rounded-md bg-gradient-to-r from-red-800 to-red-500 px-3 py-2 text-sm text-white transition hover:opacity-90 sm:px-5 sm:py-3 lg:ml-0 lg:mr-0"
        >
          Register
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-2xl text-red-900 lg:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile links */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-2 text-base font-semibold">
            <Link to="/home" onClick={closeMenu} className={linkStyle("/home")}>Home</Link>
            <Link to="/units" onClick={closeMenu} className={linkStyle("/units")}>Units</Link>
            <Link to="/zones" onClick={closeMenu} className={linkStyle("/zones")}>Zones</Link>
            <Link to="/developers" onClick={closeMenu} className={linkStyle("/developers")}>Developers</Link>
            <Link to="/contactus" onClick={closeMenu} className={linkStyle("/contactus")}>Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
