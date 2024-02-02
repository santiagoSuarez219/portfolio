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
    <aside className="w-full p-4 lg:p-6 grid lg:gap-0 gap-4 text-gray-color text-base content-center">
      <article className="place-self-center max-w-screen-lg flex flex-col gap-4 lg:text-justify">
        <div className="flex lg:gap-6 gap-4 items-center">
          <Link to="/">
            <HiArrowSmallLeft className="text-green-color w-6 h-6 md:w-10 md:h-10 cursor-pointer" />
          </Link>
          <h1 className="w-full text-2xl md:text-3xl lg:text-5xl text-white">
            {project.title}
          </h1>
        </div>
        <p>{project.description}</p>
        <ul className="w-full">
          {project.items.map((item, index) => (
            <ItemListProject key={index} text={item} />
          ))}
        </ul>
      </article>
      <div className="flex flex-col lg:gap-6 md:gap-4 md:p-4 lg:p-0 max-w-screen-lg lg:place-self-center lg:flex-col-reverse">
        <figure className="w-[70%] bg-card-color p-1 md:p-2 rounded-lg self-end">
          <img
            src={project.image}
            alt="image-project"
            className="object-contain"
          />
        </figure>
        <article className="mt-4 flex md:justify-between lg:justify-start flex-col gap-4 lg:gap-6">
          <div>
            <h2 className="mb-2 text-white text-base">Repositorio</h2>
            <div className="flex gap-6">
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
          <div>
            <h2 className="mb-2 text-white text-base">
              Tecnologias utilizadas
            </h2>
            <ul className="flex gap-4">
              {project.tools.map((tool, index) => (
                <ToolProjectCard
                  key={index}
                  text={tool.name}
                  icon={tool.icon}
                />
              ))}
            </ul>
          </div>
        </article>
      </div>
    </aside>
  );
};
export default Project;
