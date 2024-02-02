import { useState } from "react";
import { Link } from "react-router-dom";
import PerfilIcon from "../../img/logo.png";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="hidden md:flex w-full h-20 justify-between items-center">
      <ul className="flex items-center lg:gap-4">
        <figure className="hidden lg:block bg-card-color w-20 h-20 aspect-square object-cover rounded-full">
          <img src={PerfilIcon} alt="logo" />
        </figure>
        <li className="hidden md:block max-w-[300px] text-3xl font-semibold">
          <Link to="/">Santiago S.</Link>
        </li>
      </ul>
      <ul className="relative flex gap-4 lg:gap-6 lg:text-base">
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
