import { createContext, useState } from "react";
import projectsData from "./projects";
import educationData from "./education";

const Context = createContext();

const Provider = ({ children }) => {
  const [projects, setProjects] = useState(projectsData);
  const [project, setProject] = useState(projects[1]);
  const [education, setEducation] = useState(educationData);
  const [openModal, setOpenModal] = useState(false);

  return (
    <Context.Provider
      value={{
        projects,
        project,
        setProjects,
        setProject,
        education,
        setEducation,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
