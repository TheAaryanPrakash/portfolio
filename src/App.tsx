import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Stats } from "./components/Stats";
import { Projects } from "./components/Projects";
import { LiveProjects } from "./components/LiveProjects";
import { Writing } from "./components/Writing";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Photography } from "./components/Photography";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-dvh bg-field text-field-ink">
      <Nav />
      <main>
        <Hero />
        <About />
        <Stats />
        <Projects />
        <LiveProjects />
        <Skills />
        <Writing />
        <Experience />
        <Education />
        <Photography />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
