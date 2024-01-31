import Header from "../../Components/Header";
import AboutMe from "../../Components/AboutMe";
import MySkills from "../../Components/MySkills";
import ContactMe from "../../Components/ContactMe";
import Footer from "../../Components/Footer";
import MyProjects from "../../Components/MyProjects";
import MyEducation from "../../Components/MyEducation";
import MyExperience from "../../Components/MyExperience";
import MyResearchExperience from "../../Components/MyResearchExperience";

const Home = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <MyProjects />
      <MySkills />
      <MyEducation />
      <MyExperience />
      <MyResearchExperience />
      <ContactMe />
      <Footer />
    </>
  );
};
export default Home;
