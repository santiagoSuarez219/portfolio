import { BiSolidEnvelope } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import Contact from "../Contact";

const AboutMe = () => {
  return (
    <main id="about-me" className="py-16 text-center">
      <h2 className="text-4xl md:text-5xl">Acerca de mi</h2>
      <p className="mt-8 leading-normal text-gray-color md:w-4/5 md:mx-auto">
        Soy un desarrollador full stack con 6 meses de experiencia en el
        desarrollo de aplicaciones web. Vivo en Medellín, Colombia. Mi lenguaje
        de programación favorito es JavaScript, pero también tengo experiencia
        con Python. Me gusta aprender cosas nuevas y siempre estoy buscando
        mejorar mis habilidades. Soy estudiante de Ingeniería Electrónica de
        noveno semestre en el Instituto Tecnológico Metropolitano y en mi
        carrera he tenido la oportunidad de participar en proyectos de
        investigación y desarrollo de prototipos orientados al Internet de las
        Cosas y al desarrollo de aplicaciones web.
      </p>
      <div className="w-full mb-16 mt-4 text-green-color cursor-pointer">
        <a href="" className="border-b border-green-color">
          Leer mas
        </a>
      </div>
      <div className="grid gap-8 justify-center justify-items-center md:grid-cols-3">
        <Contact
          title="Email"
          value="santiago8628@gmail.com"
          icon={BiSolidEnvelope}
        />
        <Contact
          title="LinkIn"
          value="santiagosuarez219"
          icon={BiLogoLinkedinSquare}
          link={"https://www.linkedin.com/in/santiagosuarez219"}
        />
        <Contact
          title="GitHub"
          value="santiagoSuarez219"
          icon={BiLogoGithub}
          link={"https://github.com/santiagoSuarez219"}
        />
      </div>
    </main>
  );
};
export default AboutMe;
