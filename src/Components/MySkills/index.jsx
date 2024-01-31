import { BiLogoReact } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import { HiArrowSmallUp } from "react-icons/hi2";
import LayaoutSkills from "./LayaoutSkills";

const MySkills = () => {
  return (
    <section
      id="my-skills"
      className="md:py-6 text-center flex flex-col lg:gap-6 gap-4"
    >
      <div className="w-full flex items-center justify-end gap-6 ">
        <a href="#header-section">
          <HiArrowSmallUp className="text-green-color w-10 h-10 animate-bounce" />
        </a>
        <h2 className="text-3xl lg:text-5xl text-right">Mis habilidades</h2>
      </div>
      <div className="w-full grid md:grid-cols-2 md:gap-6 gap-4">
        <div>
          <LayaoutSkills
            texts={["REACT", "TAILWIND", "JAVASCRIPT"]}
            value={["70%", "50%", "70%"]}
            icons={[BiLogoReact, BiLogoTailwindCss, BiLogoJavascript]}
            title="Frontend"
          />
        </div>
        <div>
          <LayaoutSkills
            texts={["NESTJS", "NODE Y EXPRESS", "MONGODB"]}
            value={["50%", "40%", "30%"]}
            icons={[SiNestjs, BiLogoNodejs, BiLogoMongodb]}
            title="Backend"
          />
        </div>
      </div>
    </section>
  );
};
export default MySkills;
