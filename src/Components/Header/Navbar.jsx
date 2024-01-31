import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="hidden md:flex w-full mt-4 h-20justify-between items-center">
      <ul className="flex items-center gap-2">
        <figure className="hidden md:block bg-card-color w-20 h-20 aspect-square object-cover rounded-full">
          <img src="../public/img/logo.png" alt="logo" />
        </figure>
        <li className="hidden md:block max-w-[300px] text-3xl font-semibold">
          <Link to="/">
            Santiago <span className="hidden lg:block">S.</span>
          </Link>
        </li>
      </ul>
      <ul
        className={`
        md:relative md:flex gap-6 md:bg-transparent md:clip-circle-full lg:text-base
      `}
      >
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
        <li className="hover:text-green-color">Contacto</li>
      </ul>
    </nav>
  );
};
export default Navbar;
