import { useContext } from "react";
import { HiArrowSmallUp } from "react-icons/hi2";
import { Context } from "../../Context";
import CardEducation from "./CardEducation";

const MyEducation = () => {
  const { education } = useContext(Context);
  return (
    <section id="my-education" className="mt-8 flex flex-col items-center">
      <div className="w-full flex items-center md:gap-4">
        <h2 className="text-left text-4xl lg:text-5xl">Educacion</h2>
      </div>
      <div className="w-full mt-4 grid md:grid-cols-2 gap-4">
        {education.map((edu) => (
          <CardEducation
            key={edu.id}
            id={edu.id}
            title={edu.title}
            institucion={edu.institucion}
            duracion={edu.duracion}
            logo={edu.logo}
          />
        ))}
      </div>
    </section>
  );
};
export default MyEducation;
