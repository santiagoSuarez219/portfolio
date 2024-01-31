const CardEducation = ({ id, title, institucion, duracion, logo }) => {
  const selectBackgrounColor = (institucion) => {
    if (institucion === "Platzi") return "bg-green-color";
    if (institucion === "Instituto Tecnologico Metropolitano")
      return "bg-white";
    if (institucion === "Universidad Autonoma de Bucaramanga")
      return "bg-card-color";
  };

  const selectStyleById = (id) => {
    if (id % 2 === 0) return "flex-row-reverse md:text-right";
    if (id % 2 !== 0) return "flex-row";
  };

  return (
    <aside
      className={`w-full md:px-2 md:flex gap-6 items-center ${selectStyleById(
        id
      )}`}
    >
      <figure
        className={`hidden md:block w-32 p-4 rounded-full aspect-square ${selectBackgrounColor(
          institucion
        )}`}
      >
        <img src={logo} alt="logo-itm" className="aspect-square" />
      </figure>
      <article className="text-gray-color">
        <h1 className="text-base lg:text-xl">{title}</h1>
        <h2 className="text-sm lg:text-lg font-medium">{institucion}</h2>
        <p className="text-xs lg:text-base">{duracion}</p>
      </article>
    </aside>
  );
};
export default CardEducation;
