import { createContext, useState } from "react";
import Ecommerce from "../img/13.jpg";

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
          icon: "BiLogoReact",
        },
        {
          name: "Tailwind",
          icon: "BiLogoTailwindCss",
        },
      ],
      image: Ecommerce,
      style: true,
    },
    {
      id: 2,
      title: "App Smartgrow",
      description:
        "Esta app es un proyecto fullstack que integra internet de las cosas y fue creada para un proyecto de investigacion de Cannabis en el Insituto Tecnologico Metropolitano, es adaptable a cualquier dispositivo y tiene las siguientes funcionalidades",
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
          icon: "BiLogoReact",
        },
        {
          name: "Tailwind",
          icon: "BiLogoTailwindCss",
        },
        {
          name: "NestJS",
          icon: "BiLogoTailwindCss",
        },
        {
          name: "MongoDB",
          icon: "BiLogoTailwindCss",
        },
      ],
      image: Ecommerce,
      style: false,
    },
  ]);
  return (
    <Context.Provider
      value={{
        projects,
        setProjects,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };
