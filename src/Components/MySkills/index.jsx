import { BiLogoReact } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import LayaoutSkills from "./LayaoutSkills";

const MySkills = () => {
  return (
    <section
      id="my-skills"
      className="md:py-16 text-center flex flex-col lg:gap-6 gap-4"
    >
      <h2 className="text-4xl mb-4 md:mb-16 lg:text-5xl md:text-right text-center">
        Mis habilidades
      </h2>
      <div className="w-full mb-8 md:mb-0 flex flex-col gap-4 md:gap-0 md:flex-row items-center">
        <h3 className="w-1/2 md:text-4xl text-gray-color text-3xl lg:text-5xl md:text-left text-center  order-1 md:order-none">
          Frontend
        </h3>
        <LayaoutSkills
          texts={["REACT", "TAILWIND", "JAVASCRIPT"]}
          icons={[BiLogoReact, BiLogoTailwindCss, BiLogoJavascript]}
        />
      </div>
      <div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row items-center">
        <LayaoutSkills
          texts={["NESTJS", "NODE Y EXPRESS", "MONGODB"]}
          icons={[SiNestjs, BiLogoNodejs, BiLogoMongodb]}
        />
        <h3 className="w-1/2 md:text-4xl text-gray-color text-3xl lg:text-5xl md:text-right text-center order-1 md:order-none">
          Backend
        </h3>
      </div>
    </section>
  );
};
export default MySkills;
