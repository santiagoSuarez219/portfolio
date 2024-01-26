import { BiLogoReact } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoDocker } from "react-icons/bi";
import SkillCard from "../SkillCard";
import CardPortfolio from "../../img/CardPortfolio.jpg";
import LayaoutSkills from "./LayaoutSkills";

const MySkills = () => {
  return (
    <section
      id="my-skills"
      className="py-16 text-center flex flex-col lg:gap-6 gap-4"
    >
      <h2 className="text-4xl mb-16 md:text-5xl text-right">Mis habilidades</h2>
      <div className="w-full flex items-center">
        <h3 className="w-1/2 text-5xl text-left">Frontend</h3>
        <LayaoutSkills
          texts={["REACT", "TAILWIND", "JAVASCRIPT"]}
          icons={[BiLogoReact, BiLogoTailwindCss, BiLogoJavascript]}
        />
      </div>
      <div className="w-full flex items-center mt-16">
        <LayaoutSkills
          texts={["NESTJS", "NODE Y EXPRESS", "MONGODB"]}
          icons={[SiNestjs, BiLogoNodejs, BiLogoMongodb]}
        />
        <h3 className="w-1/2 text-5xl text-right">Backend</h3>
      </div>
    </section>
  );
};
export default MySkills;
