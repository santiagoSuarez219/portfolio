import { HiArrowSmallUp } from "react-icons/hi2";
import CardEducation from "../MyEducation/CardEducation";
import LogoItm from "../../img/logo-itm.png";

const MyExperience = () => {
  return (
    <section id="my-experience" className="flex flex-col items-center mt-8">
      <div className="w-full flex items-center md:gap-4 lg:gap-6 md:justify-end">
        <h2 className="text-left text-4xl lg:text-5xl">Mi Experiencia</h2>
        <a href="#header-section" className="hidden md:block">
          <HiArrowSmallUp className="text-green-color w-10 h-10 animate-bounce" />
        </a>
      </div>
      <div className="mt-4 w-full grid md:grid-cols-1 md:gap-6 gap-4">
        <CardEducation
          id={1}
          title={"Desarrollador Fullstack"}
          institucion={"Instituto Tecnologico Metropolitano"}
          duracion={"6 meses"}
          logo={LogoItm}
          description={
            "Desarrolle una aplicación web y de internet de las cosas para supervisar y gestionar un sistema de cultivo hidropónico. Con esta aplicación se pueden visualizar datos en tiempo real, crear graficas de comportamiento de las variables e interactuar directamente con el hardware del sistema. Utilice tecnologías, tales como, Mongo DB para el almacenamiento de los datos, NestJS para crear una API Rest, ReactJS, TailwindCSS y Vite para crear una interfaz de usuario interactiva y el protocolo de comunicación MQTT para la comunicación de todas las partes del sistema"
          }
        />
      </div>
    </section>
  );
};
export default MyExperience;
