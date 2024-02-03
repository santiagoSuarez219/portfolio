import { useState } from "react";
import { Link } from "react-router-dom";
import PerfilIcon from "../../img/logo.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="hidden md:flex w-full lg:h-20 h-16 fixed lg:mt-6 px-6 justify-between items-center">
      <ul className="flex items-center lg:gap-4">
        <figure className="hidden lg:block bg-card-color w-20 I aspect-square object-cover rounded-full">
          <img src={PerfilIcon} alt="logo" />
        </figure>
        <li className="hidden md:block max-w-[300px] text-3xl font-semibold">
          <a href="#header-section">Santiago S.</a>
        </li>
      </ul>
      <ul className="flex gap-4 lg:gap-6 lg:text-base">
        <li className="hover:text-green-color">
          <a href="#my-projects">Proyectos</a>
        </li>
        <li className="hover:text-green-color">
          <a href="#my-skills">Habilidades</a>
        </li>
        <li className="hover:text-green-color">
          <a href="#my-education">Educacion</a>
        </li>
        <li className="hover:text-green-color">
          <a href="#my-experience">Experiencia</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
