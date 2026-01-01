import React, { useState } from "react";
import { FaSchool } from "react-icons/fa";
import { Link } from "react-router-dom";
import AuthModal from "../Auth/AuthModal";

const Header = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <header className="bg-black text-white px-3 py-3 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-nowrap">
          {/* LOGO */}
          <div className="flex items-center gap-3 shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src="/src/assets/Logo.png"
              alt="Logo"
            />

            {/* MOBILE TEXT */}
            <span className="md:hidden text-sm font-bold">M.M.</span>

            {/* DESKTOP TEXT */}
            <span className="hidden md:block text-xl font-bold">
              M.M. Vidya Mandir Primary School
            </span>
          </div>

          {/* NAVBAR */}
          <nav className="flex items-center gap-3 md:gap-6 text-xs md:text-lg font-medium flex-nowrap">
            <Link to="/" className="hover:text-amber-400 transition">
              Home
            </Link>

            <Link to="/about" className="hover:text-amber-400 transition">
              About
            </Link>

            <button
              onClick={() => setActiveModal("login")}
              className="border border-white px-2 py-1 rounded-full hover:bg-white hover:text-black transition"
            >
              Login
            </button>

            <button
              onClick={() => setActiveModal("signup")}
              className="bg-amber-400 text-black px-2 py-1 rounded-full font-semibold hover:bg-amber-500 transition"
            >
              SignUp
            </button>
          </nav>
        </div>
      </header>

      {activeModal && <AuthModal onClose={() => setActiveModal(null)} />}
    </>
  );
};

export default Header;
