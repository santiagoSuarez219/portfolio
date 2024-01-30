import { useContext } from "react";
import { Link } from "react-router-dom";
import { HiArrowSmallLeft } from "react-icons/hi2";
import ItemListProject from "../../Components/ItemListProject";
import ToolProjectCard from "../../Components/ToolProjectCard";
import { Context } from "../../Context";

const Project = () => {
  const { project } = useContext(Context);
  return (
    <aside className="w-full lg:h-screen grid lg:grid-cols-2 py-4 md:py-6 md:gap-6 gap-4 text-gray-color text-base md:text-lg items-center">
      <article className="w-full h-full flex flex-col justify-center md:gap-6 gap-4">
        <div className="flex items-center md:gap-6 gap-4">
          <Link to="/">
            <HiArrowSmallLeft className="text-green-color w-6 h-6 md:w-10 md:h-10 animate-bounce cursor-pointer" />
          </Link>
          <h1 className="w-full text-2xl md:text-5xl text-white">
            {project.title}
          </h1>
        </div>
        <p>{project.description}</p>
        <ul className="w-full">
          {project.items.map((item, index) => (
            <ItemListProject key={index} text={item} />
          ))}
        </ul>
        <input
          type="submit"
          value="Ir al proyecto"
          className="w-full bg-green-color/85 text-white p-2 rounded-lg cursor-pointer text-lg md:hover:bg-green-color transition-all animate-bounce md:animate-none "
        />
      </article>
      <div className="flex flex-col gap-6 md:p-4">
        <figure className="hidden md:block w-full bg-card-color p-2 rounded-lg md:order-last ld:order-none">
          <img
            src={project.image}
            alt="image-project"
            className="object-contain"
          />
        </figure>
        <article className="">
          <h2 className="mb-2 text-white text-lg text-right">
            Tecnologias utilizadas
          </h2>
          <ul className="flex gap-4 justify-end">
            {project.tools.map((tool, index) => (
              <ToolProjectCard key={index} text={tool.name} icon={tool.icon} />
            ))}
          </ul>
        </article>
      </div>
    </aside>
  );
};
export default Project;
