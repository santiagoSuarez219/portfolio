import { useState } from "react";
import Navbar from "../Navbar";
import { BiSolidCopy } from "react-icons/bi";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Header = () => {
  const [isCopied, setIsCopied] = useState(false);

  const alertCopy = () => {
    setIsCopied(true);
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
            Soy full stack developer con JavaScript, React, NodeJs, y Express.
            Abajo esta mi correo para que me contactes.
          </p>
          <div className="mb-6 py-2 relative flex items-center justify-between border-b border-white">
            <p className="text-gray-color text-lg ">santiago8628@gmail.com</p>
            <CopyToClipboard text="santiago8628@gmail.com">
              <BiSolidCopy
                className="w-5 h-5 text-green-color cursor-pointer"
                onClick={() => alertCopy()}
              />
            </CopyToClipboard>
            {isCopied && (
              <p className="absolute -right-3 -top-5 bg-card-color p-1 text-xs">
                Copiado!
              </p>
            )}
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] auto-rows-[60px] gap-8 max-w-lg mx-auto md:mx-0">
            <a
              href=""
              className="bg-green-color flex items-center justify-center"
            >
              Ver CV
            </a>
            <a
              href=""
              className="flex items-center justify-center border-white border"
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
