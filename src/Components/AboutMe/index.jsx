import AboutMeImg from "../../img/portfolio03.jpg";

const AboutMe = () => {
  return (
    <main id="about-me" className="py-6 text-right">
      <h2 className="text-4xl md:text-5xl">Acerca de mi</h2>
      <div className="flex w-full justify-between">
        <figure className="w-2/5 hover:scale-105 transition-transform">
          <img
            src={AboutMeImg}
            alt="about-me-img"
            className="aspect-square object-cover rounded-lg"
          />
        </figure>
        <article className="w-1/2 mt-6 text-xl leading-normal text-gray-color">
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
          <div className="mt-4 text-gray-color text-lg hover:text-green-color cursor-pointer">
            <a href="">Leer mas</a>
          </div>
        </article>
      </div>
    </main>
  );
};
export default AboutMe;
