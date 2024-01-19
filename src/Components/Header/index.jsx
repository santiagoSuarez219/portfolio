import Navbar from "../Navbar";

const Header = () => {
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
          <p className="text-gray-color text-xl mt-3 mb-6">
            Full stack developer
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] auto-rows-[60px] gap-8 max-w-lg mx-auto md:mx-0">
            <a
              href=""
              className="bg-green-color flex items-center justify-center"
            >
              Descargar HdV
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
