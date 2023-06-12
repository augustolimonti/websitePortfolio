import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar.js'
import Hero from './Pages/Hero.js'
import About from './Pages/About.js'
import Projects from './Pages/Projects.js'
import OtherProjects from './Pages/OtherProjects.js'
import NextSteps from './Pages/NextSteps.js'
import Socials from './Components/Socials.js'
import { useState, useEffect, useRef, useCallback } from 'react';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const otherProjectsRef = useRef(null);
  const nextStepsRef = useRef(null);

  const [sectionIndicator, setSectionIndicator] = useState(
  {
    hero : true,
    about: false,
    projects: false,
    otherProjects: false,
    nextSteps: false,
  }
)

// Callback for the observer
  const observerCallback = useCallback((entries, observer) => {
  entries.forEach((entry) => {
    const isVisible = entry.isIntersecting;
    switch (entry.target) {
      case heroRef.current:
        setSectionIndicator(prev => ({ ...prev, hero: isVisible }));
        break;
      case aboutRef.current:
        setSectionIndicator(prev => ({ ...prev, about: isVisible }));
        break;
      case projectsRef.current:
        setSectionIndicator(prev => ({ ...prev, projects: isVisible }));
        break;
      case otherProjectsRef.current:
        setSectionIndicator(prev => ({ ...prev, otherProjects: isVisible }));
        break;
      case nextStepsRef.current:
        setSectionIndicator(prev => ({ ...prev, nextSteps: isVisible }));
        break;
      default:
        break;
    }
  });
}, []);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,  // Adjust this value for when to trigger "visibility"
    });

    if (heroRef.current) observer.observe(heroRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (otherProjectsRef.current) observer.observe(otherProjectsRef.current);
    if (nextStepsRef.current) observer.observe(nextStepsRef.current);

    return () => observer.disconnect();  // Clean-up function
  }, [observerCallback]);

  const scrollToSection = (section) => {
    switch(section) {
      case 'hero':
        heroRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'otherProjects':
        otherProjectsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'nextSteps':
        nextStepsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className={`relative bg-back-100 min-h-screen ${showMenu ? "overflow-hidden h-screen" : ""}`}>
      <Navbar scrollToSection={scrollToSection} setShowMenu={setShowMenu} showMenu={showMenu}/>
      <div className={`${showMenu ? "blur-lg sm:blur-none" : ""}`}>
        <Socials/>
        <div className="border-r border-back-400 fixed right-20 top-1/2 transform translate-y-[-50%] w-[100px] h-[400px] flex items-center justify-center hidden lg:block">
          <div className="grid grid-col-5 w-full h-full">
            <div className = {`h-full w-full text-end p-3 text-sm ${sectionIndicator['hero'] ? "border-r-4 border-other-100 font-bold text-other-100" : "font-lato-bold text-back-300"}`}>
              00
            </div>
            <div className = {`h-full w-full text-end p-3 text-sm ${sectionIndicator['about'] ? "border-r-4 border-other-100 font-bold text-other-100" : "font-lato-bold text-back-300"}`}>
            01
            </div>
            <div className = {`h-full w-full text-end p-3 text-sm ${sectionIndicator['projects'] ? "border-r-4 border-other-100 font-bold text-other-100" : "font-lato-bold text-back-300"}`}>
            02
            </div>
            <div className = {`h-full w-full text-end p-3 text-sm ${sectionIndicator['otherProjects'] ? "border-r-4 border-other-100 font-bold text-other-100" : "font-lato-bold text-back-300"}`}>
            03
            </div>
            <div className = {`h-full w-full text-end p-3 text-sm ${sectionIndicator['nextSteps'] ? "border-r-4 border-other-100 font-bold text-other-100" : "font-lato-bold text-back-300"}`}>
            04
            </div>
          </div>
        </div>
        <Hero ref={heroRef} scrollToSection={scrollToSection} />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <OtherProjects ref={otherProjectsRef} />
        <NextSteps ref={nextStepsRef}/>
        <div className="flex flex-col justify-center text-center items-center min-h-[100px] bg-back-100 gap-2 text-back-400 font-lato-bold">
          <p className="text-center text-back-400 font-lato-bold">©2023 - All rights reserved by Augusto Limonti.</p>
          <div className="flex gap-8">
            <a href="https://github.com/augustolimonti" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github text-2xl hover:text-other-100"></i>
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <i class="fa-solid fa-link text-2xl hover:text-other-100"></i>
            </a>
            <a href="https://www.linkedin.com/in/augusto-limonti-389679b8/" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-linkedin-in text-2xl hover:text-other-100"></i>
            </a>
            <a href="mailto:agulimonti09@gmail.com">
              <i class="fa-solid fa-envelope text-2xl hover:text-other-100"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
