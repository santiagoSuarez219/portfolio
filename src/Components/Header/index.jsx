import { useState } from "react";
import { BiLogoGithub } from "react-icons/bi";
import { BiSolidEnvelope } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { Toaster } from "react-hot-toast";
import Navbar from "./Navbar";
import ContactContainer from "./ContactContainer";

const Header = () => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <header>
      <Navbar />
      <section className="pt-10 pb-16 md:flex justify-between items-center gap-8">
        <figure className="md:order-1">
          <img
            src="./public/img/foto1.jpg"
            alt="foto1"
            className="w-[90%] aspect-square object-cover rounded-full max-w-sm mx-auto"
          />
        </figure>
        <article className="text-center mt-8 p-2 md:w-1/2 md:text-left">
          <h1 className="text-4xl md:text-5xl">Hola, yo soy Santiago Suarez</h1>
          <p className="text-gray-color text-xl my-4 md:my-6 max-w-[500px]">
            Soy desarrollador full stack con javaScript, react, nodejs, express
            y nestjs. Abajo puedes copiar mi email y ponernos en contacto.
          </p>
          <ContactContainer
            text={"santiago8628@gmail.com"}
            icon={BiSolidEnvelope}
          />
          <ContactContainer text={"santiagoSuarez219"} icon={BiLogoGithub} />
          <ContactContainer
            text={"santiagosuarez219"}
            icon={BiLogoLinkedinSquare}
          />

          <Toaster />
          <a
            href="./public/pdf/CVFullStack.pdf"
            target="_blank"
            className="w-full lg:w-2/3 mt-6 h-16 bg-green-color flex items-center justify-center rounded-lg hover:scale-105 transition-transform text-xl font-semibold"
          >
            Ver CV
          </a>
        </article>
      </section>
    </header>
  );
};
export default Header;
