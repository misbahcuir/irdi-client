import React, { useEffect, useState } from "react";
import logo from "../assets/logo-small.png";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col justify-center gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 font-medium">
      <NavLink to="/">
        <li className="px-3 py-1 text-center">Home</li>
      </NavLink>
      <NavLink to="/sample">
        <li className="px-3 py-1">About</li>
      </NavLink>
    </ul>
  );

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 border-none">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium w-full lg:w-auto"
        >
          <img src={logo} className="h-10" alt="" />
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-3">
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

          <div className="w-full hidden lg:flex justify-center items-center gap-3 text-xl">
            <Link
              to="https://facebook.com/irdibd"
              target="_blank"
              fullWidth
              variant="text"
              size="sm"
              className=""
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://linkedin.com/company/irdibd/"
              target="_blank"
              fullWidth
              variant="text"
              size="sm"
              className=""
            >
              <FaLinkedin />
            </Link>
            <Link
              to="https://instagram.com/irdinitiatives/"
              target="_blank"
              fullWidth
              variant="text"
              size="sm"
              className=""
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
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
              className="h-6 w-6"
              fill="none"
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
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto flex flex-col justify-center items-center">
          {navList}
          <div className="divider"></div>
          <div className="w-full flex justify-center items-center gap-3 text-xl">
            <Link
              to="https://facebook.com/irdibd"
              target="_blank"
              fullWidth
              variant="text"
              size="sm"
              className=""
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://linkedin.com/company/irdibd/"
              target="_blank"
              fullWidth
              variant="text"
              size="sm"
              className=""
            >
              <FaLinkedin />
            </Link>
            <Link
              to="https://instagram.com/irdinitiatives/"
              target="_blank"
              fullWidth
              variant="text"
              size="sm"
              className=""
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default Header;
