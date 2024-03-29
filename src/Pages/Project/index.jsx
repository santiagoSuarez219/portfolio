import { useContext } from "react";
import { Link } from "react-router-dom";
import { HiArrowSmallLeft } from "react-icons/hi2";
import ItemListProject from "../../Components/ItemListProject";
import ToolProjectCard from "../../Components/ToolProjectCard";
import { BiLogoGithub } from "react-icons/bi";
import { Context } from "../../Context";

const Project = () => {
  const { project } = useContext(Context);
  return (
    <aside className="w-full p-4 lg:p-6 flex flex-col text-gray-color justify-center items-center">
      <article className="relative md:max-w-screen-sm lg:max-w-screen-lg">
        <Link to="/">
          <HiArrowSmallLeft className="text-green-color w-6 h-6 absolute top-1 left-0 md:w-8 md:h-8 lg:w-10 lg:h-10 cursor-pointer" />
        </Link>
        <h1 className="w-full text-center text-2xl md:text-3xl lg:text-5xl text-green-color">
          {project.title}
        </h1>
        <p className=" text-justify mt-4 lg:mt-6 md:text-base lg:text-lg">
          {project.description}
        </p>
        <ul className="w-full text-justify mt-4 md:text-base lg:text-lg">
          {project.items.map((item, index) => (
            <ItemListProject key={index} index={index} text={item} />
          ))}
        </ul>
      </article>
      <article className="w-full max-w-screen-sm lg:max-w-screen-lg text-ri">
        <h2 className="w-full mt-4 mb-2 text-white text-base lg:text-lg">
          Tecnologias utilizadas
        </h2>
        <ul className="flex gap-4">
          {project.tools.map((tool, index) => (
            <ToolProjectCard key={index} text={tool.name} icon={tool.icon} />
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
      </article>
      <figure className="hidden md:block w-full max-w-screen-sm lg:max-w-screen-lg self-center mt-4 bg-card-color p-1 md:p-2 rounded-lg">
        <img src={project.image} alt="image-project" />
      </figure>
    </aside>
  );
};
export default Project;
