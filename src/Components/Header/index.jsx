import { useState } from "react";
import { BiSolidCopy } from "react-icons/bi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BiCheck } from "react-icons/bi";
import { Toaster, toast } from "react-hot-toast";
import Navbar from "../Navbar";

const Header = () => {
  const [isCopied, setIsCopied] = useState(false);

  const alertCopy = () => {
    setIsCopied(true);
    toast.success("Email copiado al portapapeles", {
      style: {
        background: "#333",
        color: "#fff",
      },
    });
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };
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
        <article className="text-center mt-8 md:w-1/2 md:text-left">
          <h1 className="text-4xl md:text-5xl">Hola, yo soy Santiago Suarez</h1>
          <p className="text-gray-color text-xl mt-3 mb-3 max-w-[500px]">
            Soy full stack developer con JavaScript, React, NodeJs, Express y
            NestJS. Abajo puedes copiar mi email y ponernos en contacto.
          </p>
          <div className="mb-6 py-2 flex items-center justify-between border-white transition-all">
            <CopyToClipboard text="santiago8628@gmail.com">
              <p
                className="text-gray-color text-lg cursor-pointer hover:text-green-color"
                onClick={() => alertCopy()}
              >
                santiago8628@gmail.com
              </p>
            </CopyToClipboard>
            <Toaster />
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] auto-rows-[60px] gap-8 max-w-lg mx-auto md:mx-0">
            <a
              href="./public/pdf/CVFullStack.pdf"
              target="_blank"
              className="bg-green-color flex items-center justify-center rounded-lg"
            >
              Ver CV
            </a>
            <a
              href="#about-me"
              className="flex items-center justify-center border-white border rounded-lg"
            >
              Leer mas
            </a>
          </div>
        </article>
      </section>
    </header>
  );
};
export default Header;
