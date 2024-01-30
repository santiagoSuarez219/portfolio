import { createContext, useState } from "react";
import Ecommerce from "../img/01_ecommerce.jpg";
import Smartgrow from "../img/01_smartgrow.png";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";

const Context = createContext();

const Provider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "App Ecommerce",
      description:
        "Esta app fue creada con el fin de practicar lo aprendido en los cursos de React. Esta aplicacion es una tienda en linea adaptable a cualquier dispositivo y tiene las siguientes funcionalidades",
      items: [
        "Visualizar de productos",
        "Agregar y eliminar productos de un carrito de compras",
        "Ver ordenes o compras anteriores",
        "Ver el total de la compra",
        "Filtrar productos por el nombre y/o categoria",
      ],
      tools: [
        {
          name: "React",
          icon: BiLogoReact,
        },
        {
          name: "Tailwind",
          icon: BiLogoTailwindCss,
        },
      ],
      image: Ecommerce,
      style: true,
    },
    {
      id: 2,
      title: "App Smartgrow",
      description:
        "Proyecto fullstack que integra internet de las cosas, creada para un proyecto de investigacion de Cannabis en el ITM, es adaptable a cualquier dispositivo y tiene las siguientes funcionalidades",
      items: [
        "Visualizar variables agro-climaticas del cultivo en tiempo real",
        "Visualizar el estado del sistema",
        "Interacturar con el hardware del sistema para activar o desactivar la entrada, salida y recirculacion de agua",
        "Interacturar con el sistema de control de PH y Electroconductividad de la solucion nutritiva",
        "Visualizar graficas del comportamiento las variables agro-climaticas del cultivo en el tiempo",
        "Almacenar los datos de las variables agro-climaticas del cultivo en una base de datos de MongoDB",
      ],
      tools: [
        {
          name: "React",
          icon: BiLogoReact,
        },
        {
          name: "Tailwind",
          icon: BiLogoTailwindCss,
        },
        {
          name: "NestJS",
          icon: SiNestjs,
        },
        {
          name: "MongoDB",
          icon: BiLogoMongodb,
        },
      ],
      image: Smartgrow,
      style: false,
    },
  ]);
  const [project, setProject] = useState(projects[0]);
  return (
    <Context.Provider
      value={{
        projects,
        setProjects,
        project,
        setProject,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
