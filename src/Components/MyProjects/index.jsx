import { useEffect, useContext } from "react";
import { HiArrowSmallUp } from "react-icons/hi2";
import CardProject from "./CardProject";
import { Context } from "../../Context";

const MyProjects = () => {
  const { projects, setProjects, project, setProject, setOpenModal } =
    useContext(Context);

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
    <section id="my-projects" className="mt-8 lg:mt-12 flex flex-col">
      <h2 className="w-full text-4xl lg:text-5xl">Proyectos</h2>

      <div className="mt-4 lg:mt-6 w-full grid md:grid-cols-2 lg:grid-cols-3 mb-8 gap-6">
        {projects.map((project) => (
          <CardProject
            key={project.id}
            I
            project={project}
            setProject={setProject}
            setOpenModal={setOpenModal}
          />
        ))}
      </div>
    </section>
  );
};
export default MyProjects;
