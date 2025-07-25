import Header from "../modules/Header";
import Introduction from "../modules/Introduction";
import AboutMe from "../modules/AboutMe";
import Skills from "../modules/Skills";
import Projects from "../modules/Projects";
import ProfessionalExperience from "../modules/ProfessionalExperience";
import ContactMe from "../modules/ContactMe";
import Footer from "../modules/Footer";

function Home() {
  return (
    <div className="mx-auto overflow-x-hidden xl:max-w-[1380px]">
      <Header />

      <section id="home" className="scroll-mt-28">
        <Introduction />
      </section>

      <section id="about" className="scroll-mt-28">
        <AboutMe />
      </section>

      <section id="skills" className="scroll-mt-28">
        <Skills />
      </section>

      <section id="projects" className="scroll-mt-28">
        <Projects />
      </section>

      <section id="experience" className="scroll-mt-28">
        <ProfessionalExperience />
      </section>

      <section id="contact" className="scroll-mt-28">
        <ContactMe />
      </section>

      <Footer />
    </div>
  );
}

export default Home;
