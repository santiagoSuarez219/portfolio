import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="w-full mt-4 h-20">
      <nav className="w-full h-full flex justify-between items-center">
        <ul>
          <li className="max-w-[300px] text-3xl font-semibold ">
            <Link to="/">Santiago Suarez</Link>
          </li>
        </ul>
        <ul className="z-40">
          <li
            className={`w-10 h-10 ${
              openMenu ? "bg-close-menu" : "bg-open-menu"
            } bg-cover bg-center bg-green-color rounded-lg cursor-pointer transition-all md:hidden`}
            onClick={() => {
              setOpenMenu((state) => !state);
            }}
          ></li>
        </ul>
        <ul
          className={`fixed inset-0 bg-menu-color px-[5%] grid gap-6 auto-rows-max content-center justify-items-center clip-circle-0 ${
            openMenu && "clip-circle-full"
          } transition-[clip-path] duration-500
          md:relative md:flex md:gap-6 md:bg-transparent md:clip-circle-full`}
        >
          <li>About Me</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Education</li>
          <li>Experience</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
