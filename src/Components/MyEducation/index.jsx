import { useContext } from "react";
import { HiArrowSmallUp } from "react-icons/hi2";
import { Context } from "../../Context";
import CardEducation from "./CardEducation";

const MyEducation = () => {
  const { education } = useContext(Context);
  return (
    <section
      id="my-education"
      className="py-4 md:py-16 md:text-left flex flex-col items-center"
    >
      <div className="w-full flex items-center mb-4 md:mb-6 gap-6 ">
        <h2 className="text-left text-4xl lg:text-5xl">Educacion</h2>
        <a href="#header-section">
          <HiArrowSmallUp className="text-green-color w-10 h-10 animate-bounce" />
        </a>
      </div>
      <div className="container-cards w-full grid md:grid-cols-2 md:gap-6 gap-4">
        {education.map((edu, index) => (
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
