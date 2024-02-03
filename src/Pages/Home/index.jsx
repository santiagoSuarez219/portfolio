import { useContext } from "react";
import { Context } from "../../Context";
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
import Navbar from "../../Components/Header/Navbar";
import Modal from "../../Modal";
import ProjectDetails from "../../Components/MyProjects/ProjectDetails";

const Home = () => {
  const { openModal } = useContext(Context);
  return (
    <>
      <Navbar />
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
      {openModal && (
        <Modal>
          <ProjectDetails />
        </Modal>
      )}
    </>
  );
};
export default Home;
