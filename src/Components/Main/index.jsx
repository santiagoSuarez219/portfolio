import { BiSolidEnvelope } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import Contact from "../Contact";

const Main = () => {
  return (
    <main className="py-16 text-center">
      <h2 className="text-4xl md:text-5xl">About</h2>
      <p className="mt-8 mb-16 leading-normal text-gray-color md:w-4/5 md:mx-auto">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
        molestiae libero quam repellat maiores! Tenetur mollitia fugit veniam
        labore numquam iste velit reiciendis quas voluptates, sequi adipisci eum
        maiores. Veritatis.
      </p>
      <div className="grid gap-8 justify-center justify-items-center md:grid-cols-3">
        <Contact
          title="Email"
          value="santiago8628@gmail.com"
          icon={BiSolidEnvelope}
        />
        <Contact title="LinkIn" value="@santiago" icon={BiLogoLinkedinSquare} />
        <Contact title="GitHub" value="@santiago" icon={BiLogoGithub} />
      </div>
    </main>
  );
};
export default Main;
