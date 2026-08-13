import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import KeyInsights from './components/KeyInsights';
import HowIWork from './components/HowIWork';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import ProjectFiles from './components/ProjectFiles';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <KeyInsights />
        <HowIWork />
        <Certifications />
        <Resume />
        <ProjectFiles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;