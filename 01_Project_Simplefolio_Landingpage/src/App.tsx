import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import ResumeBtn from "./components/ResumeBtn";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="mainContainer">
      <Header />
      <Intro />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
