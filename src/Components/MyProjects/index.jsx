import { useState, useEffect } from "react";
import ProjectCard from "../ProjectCard";
import CardProject from "./CardProject";
import Ecommerce from "../../img/01_project.jpg";
import Smartgrow from "../../img/02_project.jpg";

const MyProjects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Ecommerce",
      style: true,
      image: Ecommerce,
    },
    {
      id: 2,
      title: "Smartgrow",
      style: false,
      image: Smartgrow,
    },
    {
      id: 3,
      title: "ToDos",
      style: false,
      image: Ecommerce,
    },
    {
      id: 4,
      title: "Gastos Personales",
      style: false,
      image: Ecommerce,
    },
    {
      id: 5,
      title: "Veterinaria",
      style: false,
      image: Ecommerce,
    },
  ]);
  const [project, setProject] = useState({});

  useEffect(() => {
    setProject(projects[0]);
  }, []);

  useEffect(() => {
    const newProjects = projects.map((projectAux) => {
      if (projectAux.id === project.id) {
        return { ...projectAux, style: true };
      } else {
        return { ...projectAux, style: false };
      }
    });
    setProjects(newProjects);
  }, [project]);

  return (
    <section
      id="my-skills"
      className="py-4 md:py-16 text-center lg:text-left flex flex-col items-center"
    >
      <h2 className="w-full text-left text-4xl mb-4 md:mb-16 lg:text-5xl">
        Mis proyectos
      </h2>
      <div className="w-4/5 flex items-center justify-center overflow-hidden h-[430px] gap-6">
        {projects.map((project) => (
          <CardProject
            key={project.id}
            project={project}
            setProject={setProject}
          />
        ))}
      </div>
      {/* <div className="bg-red mx-auto grid gap-6 auto-rows-max grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-items-center items-center">
        <ProjectCard
          title={"Ecommerce"}
          description={description}
          imageUrl={"../public/img/app_ecommerce.png"}
        />
        <ProjectCard
          title={"Smartgrow"}
          description={description}
          imageUrl={"../public/img/app-smartgrow.jpg"}
        />
        <ProjectCard
          title={"Tareas"}
          description={description}
          imageUrl={"../public/img/app_ecommerce.png"}
        />
      </div> */}
    </section>
  );
};
export default MyProjects;
