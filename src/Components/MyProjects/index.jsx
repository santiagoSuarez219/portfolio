import { useEffect, useContext } from "react";
import { HiArrowSmallUp } from "react-icons/hi2";
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
      id="my-projects"
      className="mt-8 lg:mt-12 flex flex-col items-center"
    >
      <div className="w-full flex items-center gap-4 lg:gap-6 ">
        <h2 className="text-4xl lg:text-5xl">Projects</h2>
        <a href="#header-section" className="hidden md:block">
          <HiArrowSmallUp className="text-green-color w-10 h-10 animate-bounce" />
        </a>
      </div>
      <div className="mt-4 lg:mt-6 w-full lg:w-4/5 flex flex-col md:flex-row items-center justify-center overflow-hidden md:h-[430px] gap-6">
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
