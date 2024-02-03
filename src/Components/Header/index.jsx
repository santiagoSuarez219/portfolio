import { BiLogoGithub } from "react-icons/bi";
import { BiSolidEnvelope } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
import ContactContainer from "./ContactContainer";
import PerfilImage from "../../img/foto1.jpg";
import CV from "../../pdf/CV.pdf";
import "./styles.css";

const Header = () => {
  return (
    <header id="header-section">
      <span className="my-name text-4xl lg:text-5xl font-semibold py-2 lg:mt-6 md:mt-6">
        Hola, Yo soy Santiago Suarez
      </span>
      <section className="mt-4 lg:mt-6 md:flex justify-between items-center">
        <figure className="md:order-1 hover:scale-105 transition-transform ">
          <img
            src={PerfilImage}
            alt="foto1"
            className="w-[90%] aspect-square object-cover rounded-full max-w-sm mx-auto"
          />
        </figure>
        <article className="text-justify mt-4 md:mt-0 md:w-1/2 md:text-left">
          <p className="text-gray-color text-lg lg:text-xl max-w-[500px]">
            Soy desarrollador junior full stack con el stack MERN. Tengo 6 meses
            de experiencia en desarrollo de aplicaciones web. Abajo puedes
            copiar mi email y ponernos en contacto.
          </p>
          <ContactContainer
            text={"santiago8628@gmail.com"}
            icon={BiSolidEnvelope}
            value={"correo"}
          />
          <ContactContainer
            text={"santiagoSuarez219"}
            icon={BiLogoGithub}
            value={"github"}
            link={"https://github.com/santiagoSuarez219"}
          />
          <ContactContainer
            text={"santiagosuarez219"}
            icon={BiLogoLinkedinSquare}
            value={"linkedin"}
            link={"https://www.linkedin.com/in/santiagosuarez219"}
          />
          <Toaster />
          <a
            href={CV}
            target="_blank"
            className="w-full lg:w-2/3 mt-4 h-16 bg-green-color flex items-center justify-center rounded-lg hover:scale-105 transition-transform text-base md:text-lg lg:text-xl font-semibold"
          >
            Ver CV
          </a>
        </article>
      </section>
    </header>
  );
};
export default Header;
