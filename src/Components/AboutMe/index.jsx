import AboutMeImg from "../../img/portfolio03.jpg";

const AboutMe = () => {
  return (
    <main id="about-me" className="mt-8 lg:mt-12">
      <h2 className="text-4xl lg:text-5xl md:text-right">About me</h2>
      <div className="flex w-full lg:justify-between mt-4 lg:mt-6">
        <figure className="hidden lg:block w-[45%] hover:scale-105 transition-transform">
          <img
            src={AboutMeImg}
            alt="about-me-img"
            className="aspect-square object-cover rounded-lg"
          />
        </figure>
        <article className="w-full lg:w-1/2 text-lg lg:text-xl leading-normal text-gray-color text-justify">
          <p>
            Vivo en Medellín, Colombia. Mi lenguaje de programación favorito es
            JavaScript, pero también tengo experiencia con Python. Me gusta
            aprender cosas nuevas y siempre estoy buscando mejorar mis
            habilidades. Soy estudiante de Ingeniería Electrónica de noveno
            semestre en el Instituto Tecnológico Metropolitano y en mi carrera
            he tenido la oportunidad de participar en proyectos de investigación
            y desarrollo de prototipos orientados al Internet de las Cosas y al
            desarrollo de aplicaciones web.
          </p>
          {/* <div className="mt-4 lg:mt-6 w-full flex justify-end text-white text-base lg:text-lg cursor-pointer">
            <a
              href=""
              className="bg-green-color opacity-80 hover:opacity-100 p-3 rounded-lg"
            >
              Leer mas
            </a>
          </div> */}
        </article>
      </div>
    </main>
  );
};
export default AboutMe;
