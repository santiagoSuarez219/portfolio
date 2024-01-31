const CardEducation = ({
  id,
  title,
  institucion,
  duracion,
  logo,
  description,
}) => {
  const selectBackgrounColor = (institucion) => {
    if (institucion === "Platzi") return "bg-green-color";
    if (
      institucion === "Instituto Tecnologico Metropolitano" ||
      institucion === "Universidad Francisco de Paula Santander"
    )
      return "bg-white";
    if (institucion === "Universidad Autonoma de Bucaramanga")
      return "bg-card-color";
  };

  const selectStyleById = (id) => {
    if (id % 2 === 0) return "md:col-start-2";
  };

  return (
    <aside
      className={`w-full md:px-2 md:grid grid-cols-3 gap-6 items-center text-gray-color ${selectStyleById(
        id
      )}`}
    >
      {!description && (
        <figure
          className={`hidden md:block w-full p-4 rounded-full aspect-square ${selectBackgrounColor(
            institucion
          )}`}
        >
          <img src={logo} alt="logo-itm" className="aspect-square" />
        </figure>
      )}

      <article
        className={`text-gray-col ${
          description ? "col-span-full" : "col-span-2"
        }`}
      >
        {description ? (
          <>
            <h1 className="text-base lg:text-xl col-span-full">
              {title} - {institucion}
            </h1>
            <p className="text-sm lg:text-base font-semibold">{duracion}</p>
            <p className="hidden md:block text-sm lg:text-base text-justify mt-2">
              {description}
            </p>
          </>
        ) : (
          <>
            <h1 className="text-base lg:text-xl">{title}</h1>
            <h2 className="text-sm lg:text-lg font-medium">{institucion}</h2>
            <p className="text-xs lg:text-base">{duracion}</p>
          </>
        )}
      </article>
    </aside>
  );
};
export default CardEducation;
