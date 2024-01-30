import { useContext } from "react";
import { Link } from "react-router-dom";
import { HiArrowSmallLeft } from "react-icons/hi2";
import ItemListProject from "../../Components/ItemListProject";
import ToolProjectCard from "../../Components/ToolProjectCard";
import { Context } from "../../Context";

const Project = () => {
  const { project } = useContext(Context);
  return (
    <aside className="w-full h-screen grid grid-cols-2 py-6 gap-6 text-gray-color text-lg items-center">
      <article className="w-full h-full flex flex-col justify-center gap-6">
        <div className="flex items-center gap-6">
          <Link to="/">
            <HiArrowSmallLeft className="text-green-color w-10 h-10 animate-bounce cursor-pointer" />
          </Link>
          <h1 className="w-full text-5xl text-white">{project.title}</h1>
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
          className="w-full bg-green-color/85 text-white p-2 rounded-lg cursor-pointer text-lg hover:bg-green-color transition-all"
        />
      </article>
      <div className="flex flex-col gap-6 p-4">
        <figure className="w-full bg-card-color p-2 rounded-lg">
          <img
            src={project.image}
            alt="image-project"
            className="object-contain"
          />
        </figure>
        <article>
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

      {/* 
        
       
        
        <div className="w-full">
          
        </div>
        
      </article>
 */}
    </aside>
  );
};
export default Project;
