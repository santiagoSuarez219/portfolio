import { BiLogoReact } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import { HiArrowSmallUp } from "react-icons/hi2";
import LayaoutSkills from "./LayaoutSkills";

const MySkills = () => {
  const stylesSubtitles =
    "w-1/2 md:text-4xl text-gray-color text-3xl lg:text-5xl order-1 md:order-none opacity-80 transition hover:opacity-100";
  return (
    <section
      id="my-skills"
      className="md:py-16 text-center flex flex-col lg:gap-6 gap-4"
    >
      <div className="w-full flex items-center justify-end mb-4 md:mb-6 gap-6 ">
        <a href="#header-section">
          <HiArrowSmallUp className="text-green-color w-10 h-10 animate-bounce" />
        </a>
        <h2 className="text-4xl lg:text-5xl">Mis habilidades</h2>
      </div>
      <div className="w-full mb-8 md:mb-0 flex flex-col gap-4 md:gap-0 md:flex-row items-center">
        <h3 className={`${stylesSubtitles} md:text-left`}>Frontend</h3>
        <LayaoutSkills
          texts={["REACT", "TAILWIND", "JAVASCRIPT"]}
          value={["70%", "50%", "70%"]}
          icons={[BiLogoReact, BiLogoTailwindCss, BiLogoJavascript]}
        />
      </div>
      <div className="w-full flex flex-col gap-4 md:gap-0 md:flex-row items-center">
        <LayaoutSkills
          texts={["NESTJS", "NODE Y EXPRESS", "MONGODB"]}
          value={["50%", "40%", "30%"]}
          icons={[SiNestjs, BiLogoNodejs, BiLogoMongodb]}
        />
        <h3 className={`${stylesSubtitles} md:text-right`}>Backend</h3>
      </div>
    </section>
  );
};
export default MySkills;
