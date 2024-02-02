import Header from "../../Components/Header";
import AboutMe from "../../Components/AboutMe";
import MySkills from "../../Components/MySkills";
import Footer from "../../Components/Footer";
import MyProjects from "../../Components/MyProjects";
import MyEducation from "../../Components/MyEducation";
import MyExperience from "../../Components/MyExperience";
import MyResearchExperience from "../../Components/MyResearchExperience";
import Layaout from "../../Components/Layaout";
import Tabbar from "../../Components/Tabbar";

const Home = () => {
  return (
    <>
      <Layaout>
        <Header />
        <AboutMe />
        <MyProjects />
        <MySkills />
        <MyEducation />
        <MyExperience />
        <MyResearchExperience />
        <Footer />
      </Layaout>
      <Tabbar />
    </>
  );
};
export default Home;
