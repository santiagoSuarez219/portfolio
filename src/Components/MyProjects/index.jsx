import { useState, useEffect, useContext } from "react";
import CardProject from "./CardProject";
import { Context } from "../../Context";

const MyProjects = () => {
  const { projects, setProjects, project, setProject } = useContext(Context);

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
      <div className="w-full lg:w-4/5 flex flex-col md:flex-row items-center justify-center overflow-hidden md:h-[430px] gap-6">
        {projects.map((project) => (
          <CardProject
            key={project.id}
            project={project}
            setProject={setProject}
          />
        ))}
      </div>
    </section>
  );
};
export default MyProjects;
