const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className=" h-auto max-w-sm hover:scale-105 transition-transform ">
      <figure>
        <img
          src={imageUrl}
          alt={title}
          className="object-cover aspect-square rounded-lg"
        />
        <article className="flex flex-col gap-2 py-2">
          <h2 className="uppercase text-green-color text-center text-xl">
            {title}
          </h2>
          <p className="text-base text-gray-color">{description}</p>
        </article>
      </figure>
    </div>
  );
};
export default ProjectCard;
