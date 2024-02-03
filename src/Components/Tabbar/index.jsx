import { useContext } from "react";
import { HiCodeBracketSquare } from "react-icons/hi2";
import { HiCube } from "react-icons/hi2";
import { HiHome } from "react-icons/hi2";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { HiMiniCommandLine } from "react-icons/hi2";
import { Context } from "../../Context";

const Tabbar = () => {
  const { setOpenModal } = useContext(Context);
  return (
    <nav className="md:hidden z-20 w-full h-16 fixed bottom-0  bg-card-color grid grid-cols-5 text-xs text-green-color">
      <a
        href="#my-projects"
        className="flex flex-col justify-center items-center"
        onClick={() => setOpenModal(false)}
      >
        <HiCube className="w-5 h-5" />
        <h2>Projects</h2>
      </a>
      <a
        href="#my-skills"
        className="flex flex-col justify-center items-center"
        onClick={() => setOpenModal(false)}
      >
        <HiCodeBracketSquare className="w-5 h-5" />
        <h2>Skills</h2>
      </a>
      <a
        href="#header-section"
        className="flex flex-col justify-center items-center bg-green-color text-white rounded-full"
        onClick={() => setOpenModal(false)}
      >
        <HiHome className="w-5 h-5" />
        <h2>Home</h2>
      </a>
      <a
        href="#my-education"
        className="flex flex-col justify-center items-center"
        onClick={() => setOpenModal(false)}
      >
        <HiMiniAcademicCap className="w-5 h-5" />
        <h2>Education</h2>
      </a>
      <a
        href="#my-experience"
        className="flex flex-col justify-center items-center"
        onClick={() => setOpenModal(false)}
      >
        <HiMiniCommandLine className="w-5 h-5" />
        <h2>Experience</h2>
      </a>
    </nav>
  );
};
export default Tabbar;
