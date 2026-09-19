import Navbar from "./Components/Navbar";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Education from "./Pages/Education";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--bg-primary)]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App;