const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className=" h-auto max-w-sm hover:scale-105 transition-transform cursor-pointer">
      <figure className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover aspect-square rounded-lg"
        />
        <span className="absolute bottom-0 left-0 p-6 text-green-color text-3xl font-semibold">
          {title}
        </span>
      </figure>
    </div>
  );
};
export default ProjectCard;
