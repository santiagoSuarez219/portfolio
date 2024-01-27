const CardProject = ({ project, setProject }) => {
  const { style, title, image } = project;
  return (
    <div
      className={`h-full w-0 grow-[0.5] relative bg-card-color rounded-3xl transition-all ease-in duration-700 ${
        style && "grow-[5]"
      }`}
      onClick={() => setProject(project)}
    >
      <figure className="w-full h-full">
        <img
          src={image}
          alt="ecommerce-app"
          className="aspect-square object-cover w-full h-full rounded-3xl "
        />
      </figure>
      <h3
        className={`text-2xl absolute bottom-5 left-5 m-0 opacity-0 ${
          style && "opacity-100 duration-300 ease-in delay-700 "
        }`}
      >
        {title}
      </h3>
    </div>
  );
};
export default CardProject;
