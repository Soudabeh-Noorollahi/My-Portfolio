import Header from "./components/modules/Header";
import Introduction from "./components/modules/Introduction";
import AboutMe from "./components/modules/AboutMe";

function App() {
  return (
    <div className="mx-auto overflow-x-hidden xl:max-w-[1380px]">
      <Header />
      <Introduction />
      <AboutMe/>
    </div>
  );
}

export default App;
