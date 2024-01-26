import { BiLogoReact } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoDocker } from "react-icons/bi";
import SkillCard from "../SkillCard";

const MySkills = () => {
  return (
    <section
      id="my-skills"
      className="py-16 text-center flex flex-col lg:gap-6 gap-4"
    >
      <h2 className="text-4xl mb-16 md:text-5xl">Mis habilidades</h2>
      <div className="bg-card-color py-12 px-8 text-gray-color grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-12 place-items-center ">
        <SkillCard title={"REACT"} level={"70%"} icon={BiLogoReact} />
        <SkillCard title={"TAILWIND"} level={"40%"} icon={BiLogoTailwindCss} />
        <SkillCard title={"NESTJS"} level={"60%"} icon={SiNestjs} />
        <SkillCard title={"NODE Y EXPRESS"} level={"50%"} icon={BiLogoNodejs} />
        <SkillCard title={"MONGODB"} level={"40%"} icon={BiLogoMongodb} />
      </div>
    </section>
  );
};
export default MySkills;
