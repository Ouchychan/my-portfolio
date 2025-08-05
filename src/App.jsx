import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="App font-sans">
      <Navbar />
      <Home />
      <AboutMe />
      <Timeline />
      <Projects />
      <Skills />
      <Resume />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
