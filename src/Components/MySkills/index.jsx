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
      className="mt-8 lg:mt-12 flex flex-col lg:gap-6 gap-4"
    >
      <div className="w-full flex md:justify-end md:gap-4">
        <a href="#header-section">
          <HiArrowSmallUp className="hidden md:block text-green-color w-10 h-10 animate-bounce" />
        </a>
        <h2 className="text-4xl lg:text-5xl">Skills</h2>
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
