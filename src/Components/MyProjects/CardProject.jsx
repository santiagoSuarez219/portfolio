import ToolProjectCard from "../ToolProjectCard";

const CardProject = ({ project, setProject, setOpenModal }) => {
  const { style, title, image } = project;
  return (
    <aside className="w-full text-gray-color">
      <figure className="hidden w-full">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-square object-cover w-full h-full rounded-3xl "
        />
      </figure>
      <h3 className="text-3xl">{title}</h3>
      <p className="text-base text-justify lg:mt-6 lg:text-lg">
        {project.description}
      </p>
      <ul className="flex gap-4 mt-4">
        {project.tools.map((tool, index) => (
          <ToolProjectCard key={index} text={tool.name} icon={tool.icon} />
        ))}
      </ul>
      <p
        className="text-base mt-4 w-full flex justify-end text-green-color cursor-pointer"
        onClick={() => (setProject(project), setOpenModal(true))}
      >
        Leer mas
      </p>
    </aside>
    // <div
    //   className={`h-full w-full md:h-full md:w-0 md:grow-[0.5] relative cursor-crosshair rounded-3xl transition-all ease-in duration-700 border-2 border-green-color ${
    //     style && "md:grow-[5]"
    //   }`}
    //   onClick={() => setProject(project)}
    // >
    //   <figure className="w-full h-full hover:scale-100">
    //     <img
    //       src={image}
    //       alt="ecommerce-app"
    //       className="aspect-square object-cover w-full h-full rounded-3xl "
    //     />
    //   </figure>
    //   <Link
    //     to="/project"
    //     className={`text-2xl absolute md:bottom-5 bottom-4 md:left-8 left-4 m-0 md:opacity-0 flex items-center gap-3 ${
    //       style &&
    //       "md:opacity-100 duration-300 ease-in delay-700 cursor-pointer"
    //     }`}
    //   >
    //     <h3>{title}</h3>
    //     <HiArrowUpRight className="text-green-color h-9 w-9 rounded-full p-2 border-2 border-green-color" />
    //   </Link>
    // </div>
  );
};
export default CardProject;
