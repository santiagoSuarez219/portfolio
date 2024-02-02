import { HiArrowSmallUp } from "react-icons/hi2";
import CardEducation from "../MyEducation/CardEducation";
import LogoUFP from "../../img/logo-UFP.png";
import LogoItm from "../../img/logo-itm.png";

const MyResearchExperience = () => {
  return (
    <section
      id="my-education"
      className="py-4 md:py-6 md:text-left flex-col items-center"
    >
      <div className="w-full flex items-center mb-4 md:mb-6 gap-6">
        <h2 className="text-left text-3xl lg:text-4xl">
          Experiencia en investigacion
        </h2>
      </div>
      <div className="container-cards w-full grid md:grid-cols-2 md:gap-6 gap-4">
        <CardEducation
          id={1}
          title={
            "Ponencias en el congreso X Semana Internacional de ciencia, tecnologia e innovacion"
          }
          institucion={"Universidad Francisco de Paula Santander"}
          duracion={"2023"}
          logo={LogoUFP}
        />
        <CardEducation
          id={1}
          title={"Joven Investigador ITM 2023"}
          institucion={"Instituto Tecnologico Metropolitano"}
          duracion={"2023"}
          logo={LogoItm}
        />
      </div>
    </section>
  );
};
export default MyResearchExperience;
