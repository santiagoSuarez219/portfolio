import { useContext } from "react";
import { HiOutlineX } from "react-icons/hi";
import { Context } from "../../Context";
import ToolProjectCard from "../ToolProjectCard";
import { BiLogoGithub } from "react-icons/bi";

const ProjectDetails = () => {
  const { project, setOpenModal } = useContext(Context);
  return (
    <div className="bg-card-color w-full fixed bottom-[64px] h-[70%] rounded-t-lg p-4 overflow-y-auto text-gray-color">
      <h1 className="text-3xl text-white">{project.title}</h1>
      <HiOutlineX
        className="text-3xl absolute top-4 right-4 text-green-color"
        onClick={() => setOpenModal(false)}
      />
      <figure className="mt-4 border border-green-color rounded-lg">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg w-full h-full"
        />
      </figure>
      <h2 className="text-base mt-4 text-green-color">Funcionalidades</h2>
      <ul className="w-full text-justify md:text-base lg:text-lg">
        {project.items.map((item, index) => (
          <p key={index}>
            <span className="text-green-color font-semibold">
              {index + 1}.{" "}
            </span>
            {item}
          </p>
        ))}
      </ul>
      <h2 className="mb-2 mt-4 text-white text-base lg:text-lg lg:text-right">
        Repositorio
      </h2>

      <div className="flex gap-6 w-full lg:justify-end">
        <a href={project.repositorioFrontend} target="_blanck">
          <ToolProjectCard text={"Frontend"} icon={BiLogoGithub} />
        </a>
        {project.repositorioBackend && (
          <a href={project.repositorioBackend} target="_blanck">
            <ToolProjectCard text={"Backend"} icon={BiLogoGithub} />
          </a>
        )}
      </div>
    </div>
  );
};
export default ProjectDetails;
