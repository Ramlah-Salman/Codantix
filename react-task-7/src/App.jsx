import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactMe from "./components/Contact";
import Footer from "./components/Footer";
export default function App() {
  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <ContactMe />
      </div>
      <Footer />
    </>
  );
}
