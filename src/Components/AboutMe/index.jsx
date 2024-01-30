import AboutMeImg from "../../img/portfolio03.jpg";

const AboutMe = () => {
  return (
    <main id="about-me" className="lg:py-6 py-4 lg:text-right text-center">
      <h2 className="text-4xl lg:text-5xl">Acerca de mi</h2>
      <div className="flex w-full lg:justify-between pt-6 ">
        <figure className="hidden lg:block w-2/5 hover:scale-105 transition-transform">
          <img
            src={AboutMeImg}
            alt="about-me-img"
            className="aspect-square object-cover rounded-lg"
          />
        </figure>
        <article className="w-full lg:w-1/2 text-lg lg:text-xl leading-normal text-gray-color">
          <p>
            Soy un desarrollador full stack con 6 meses de experiencia en el
            desarrollo de aplicaciones web. Vivo en Medellín, Colombia. Mi
            lenguaje de programación favorito es JavaScript, pero también tengo
            experiencia con Python. Me gusta aprender cosas nuevas y siempre
            estoy buscando mejorar mis habilidades. Soy estudiante de Ingeniería
            Electrónica de noveno semestre en el Instituto Tecnológico
            Metropolitano y en mi carrera he tenido la oportunidad de participar
            en proyectos de investigación y desarrollo de prototipos orientados
            al Internet de las Cosas y al desarrollo de aplicaciones web.
          </p>
          <div className="mt-4 md:mt-6 text-white text-base lg:text-lg cursor-pointer">
            <a
              href=""
              className="bg-green-color opacity-80 hover:opacity-100 p-3 rounded-lg"
            >
              Leer mas
            </a>
          </div>
        </article>
      </div>
    </main>
  );
};
export default AboutMe;
