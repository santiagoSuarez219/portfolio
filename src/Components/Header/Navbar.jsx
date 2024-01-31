import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="w-full mt-4 h-20 flex justify-between items-center">
      <ul className="flex items-center gap-2">
        <figure className="hidden md:block bg-card-color w-20 h-20 aspect-square object-cover rounded-full">
          <img src="../public/img/logo.png" alt="logo" />
        </figure>
        <li className="max-w-[300px] text-3xl font-semibold">
          <Link to="/">Santiago S.</Link>
        </li>
      </ul>
      <ul className="z-40">
        <li
          className={`w-10 h-10 ${
            openMenu ? "bg-close-menu" : "bg-open-menu"
          } bg-cover bg-center bg-green-color rounded-lg cursor-pointer transition-all lg:hidden`}
          onClick={() => {
            setOpenMenu((state) => !state);
          }}
        ></li>
      </ul>
      <ul
        className={`fixed inset-0 bg-menu-color px-[5%] grid gap-6 auto-rows-max content-center justify-items-center clip-circle-0 ${
          openMenu && "clip-circle-full"
        } transition-[clip-path] duration-500
        lg:relative lg:flex lg:gap-6 lg:bg-transparent lg:clip-circle-full lg:text-base
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
        <li className="hover:text-green-color">Experiencia</li>
        <li className="hover:text-green-color">Contacto</li>
      </ul>
    </nav>
  );
};
export default Navbar;
