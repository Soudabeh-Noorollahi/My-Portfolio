import Header from "./components/modules/Header";
import Introduction from "./components/modules/Introduction";
import AboutMe from "./components/modules/AboutMe";
import Skills from "./components/modules/Skills";
import Projects from "./components/modules/Projects";

function App() {
  return (
    <div className="mx-auto overflow-x-hidden xl:max-w-[1380px]">
      <Header />
      <Introduction />
      <AboutMe/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
