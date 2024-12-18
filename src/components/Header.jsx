"use client";
import { Button, toast } from "keep-react";
import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/logo-small.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { BiLogIn } from "react-icons/bi";

const Header = () => {
  const [openNav, setOpenNav] = useState(false); // Mobile menu toggle
  const { user, setUser, logOut } = useContext(AuthContext); // User context
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"); // Dark mode theme toggle
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleTheme = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  const handleLogOut = () => {
    logOut()
      .then(async () => {
        setUser(null);
        toast.success("Logout Successfull");
        await navigate("/");
      })
      .catch((error) => console.error("Logout Error: ", error));
  };

  const navList = (
    <ul className="flex flex-col items-center gap-4 lg:flex-row lg:gap-6 font-medium">
      <NavLink to="/" className="hover:text-teal-600 py-1 px-3">
        <li>Home</li>
      </NavLink>
      <NavLink to="/about" className="hover:text-teal-600 py-1 px-3">
        <li>About</li>
      </NavLink>
      {user && (
        <NavLink to="/dashboard" className="hover:text-teal-600 py-1 px-3">
          <li>Dashboard</li>
        </NavLink>
      )}
    </ul>
  );

  return (
    <header>
      <div className="container h-[64px] lg:h-[84px] mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">{navList}</nav>

        <div className="flex">
          {/* Logout Icon for Loggen In User */}
          <div className="flex items-center gap-4">
            {user && (
              <button onClick={handleLogOut} title="Logout">
                <BiLogIn className="text-3xl hover:text-teal-600" />
              </button>
            )}
            {/* Theme Toggle */}
            <label className="grid cursor-pointer place-items-center mr-4">
              <input
                onChange={handleTheme}
                type="checkbox"
                value="synthwave"
                checked={theme === "dark" ? true : false}
                className="toggle theme-controller bg-[#028182] hover:bg-[#028182] col-span-2 col-start-1 row-start-1"
              />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>

            {/* Social Links */}
            <div className="hidden lg:flex gap-4">
              <a
                href="https://facebook.com/irdibd"
                target="_blank"
                rel="noreferrer"
                className="text-xl hover:text-teal-600"
              >
                <FaFacebook />
              </a>
              <a
                href="https://linkedin.com/company/irdibd/"
                target="_blank"
                rel="noreferrer"
                className="text-xl hover:text-teal-600"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://instagram.com/irdinitiatives/"
                target="_blank"
                rel="noreferrer"
                className="text-xl hover:text-teal-600"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden " onClick={() => setOpenNav(!openNav)}>
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`lg:hidden  transition-all duration-300 ease-in-out ${
          openNav
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto flex flex-col items-center p-4">
          {navList}
          <div className="divider"></div>
          <div className="flex gap-4">
            <a
              href="https://facebook.com/irdibd"
              target="_blank"
              rel="noreferrer"
              className="text-xl hover:text-teal-600"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com/company/irdibd/"
              target="_blank"
              rel="noreferrer"
              className="text-xl hover:text-teal-600"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/irdinitiatives/"
              target="_blank"
              rel="noreferrer"
              className="text-xl hover:text-teal-600"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
