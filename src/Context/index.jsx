import { createContext, useState } from "react";
import projectsData from "./projects";
import educationData from "./education";

const Context = createContext();

const Provider = ({ children }) => {
  const [projects, setProjects] = useState(projectsData);
  const [project, setProject] = useState(projects[0]);
  const [education, setEducation] = useState(educationData);
  return (
    <Context.Provider
      value={{
        projects,
        project,
        setProjects,
        setProject,
        education,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
