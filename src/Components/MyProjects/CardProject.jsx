import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const CardProject = ({ project, setProject }) => {
  const { style, title, image } = project;
  return (
    <div
      className={`h-full w-full md:h-full md:w-0 md:grow-[0.5] relative cursor-crosshair rounded-3xl transition-all ease-in duration-700 border-2 border-green-color ${
        style && "md:grow-[5]"
      }`}
      onClick={() => setProject(project)}
    >
      <figure className="w-full h-full hover:scale-100">
        <img
          src={image}
          alt="ecommerce-app"
          className="aspect-square object-cover w-full h-full rounded-3xl "
        />
      </figure>
      <Link
        to="/project"
        className={`text-2xl absolute md:bottom-5 bottom-4 md:left-8 left-4 m-0 md:opacity-0 flex items-center gap-3 ${
          style &&
          "md:opacity-100 duration-300 ease-in delay-700 cursor-pointer"
        }`}
      >
        <h3>{title}</h3>
        <HiArrowUpRight className="text-green-color h-9 w-9 rounded-full p-2 border-2 border-green-color" />
      </Link>
    </div>
  );
};
export default CardProject;
