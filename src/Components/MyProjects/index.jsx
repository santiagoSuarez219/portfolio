import ProjectCard from "../ProjectCard";

const MyProjects = () => {
  const description =
    "Esta aplicacion fue creada con React, Tailwind y Vite. Es un ecommerce de venta de ropa.";
  return (
    <section id="my-skills" className="py-6 text-left">
      <h2 className="text-4xl mb-16 md:text-5xl">Mis proyectos</h2>
      <div className="py-16 bg-red mx-auto grid gap-8 auto-rows-max grid-cols-[repeat(auto-fit,minmax(280px,1fr))] justify-items-center items-center">
        <ProjectCard
          title={"Ecommerce"}
          description={description}
          imageUrl={"../public/img/app_ecommerce.png"}
        />
        <ProjectCard
          title={"Smartgrow"}
          description={description}
          imageUrl={"../public/img/app-smartgrow.jpg"}
        />
        <ProjectCard
          title={"Tareas"}
          description={description}
          imageUrl={"../public/img/app_ecommerce.png"}
        />
      </div>
    </section>
  );
};
export default MyProjects;
