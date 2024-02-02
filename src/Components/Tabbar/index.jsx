import { HiCodeBracketSquare } from "react-icons/hi2";
import { HiCube } from "react-icons/hi2";
import { HiHome } from "react-icons/hi2";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { HiMiniCommandLine } from "react-icons/hi2";

const Tabbar = () => {
  return (
    <nav className="md:hidden w-full h-16 fixed bottom-0  bg-card-color grid grid-cols-5 text-xs text-green-color">
      <a
        href="#my-projects"
        className="flex flex-col justify-center items-center"
      >
        <HiCube className="w-5 h-5" />
        <h2>Projects</h2>
      </a>
      <a
        href="#my-skills"
        className="flex flex-col justify-center items-center"
      >
        <HiCodeBracketSquare className="w-5 h-5" />
        <h2>Skills</h2>
      </a>
      <a
        href="#header-section"
        className="flex flex-col justify-center items-center bg-green-color text-white rounded-full"
      >
        <HiHome className="w-5 h-5" />
        <h2>Home</h2>
      </a>
      <a
        href="#my-education"
        className="flex flex-col justify-center items-center"
      >
        <HiMiniAcademicCap className="w-5 h-5" />
        <h2>Education</h2>
      </a>
      <a
        href="#my-experience"
        className="flex flex-col justify-center items-center"
      >
        <HiMiniCommandLine className="w-5 h-5" />
        <h2>Experience</h2>
      </a>
    </nav>
  );
};
export default Tabbar;
