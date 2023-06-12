import React, { useState, useEffect } from 'react';
import AguImage from '../img/augustoImage.jpeg'
import AguImageOverlay from '../img/augustoImageOverlay.png'
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.css';

function Navbar({ scrollToSection, setShowMenu, showMenu }) {

  const [showNav, setShowNav] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  // mobile variables
  // const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = (val) => {
    setShowMenu(val || !showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setShowNav(position <= 0 || scrollPosition > position)
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition]);

  const handleScrollFromMenu = (section) => {
    setShowMenu(false);
    setTimeout(() => {
      scrollToSection(section);
    }, 100); // adjust delay as needed
  };


  return (
    <div className={`top-0 right-0 fixed z-30 w-full transition-all duration-500 ${showNav ? 'opacity-100' : 'opacity-0'}`}>
      <div className="header flex justify-between items-center p-6 w-full">
          <div className="flex items-center">
            <img src={AguImage} alt="Augusto Limonti" className="w-[12%] h-[12%] mr-4 rounded-full" />
            <div className="text-back-100 font-bold text-2xl hover:text-other-100 hidden md:block">Augusto Limonti.</div>
          </div>
          <div className="block sm:flex sm:gap-8 sm:text-md hidden">
            <ul className="flex space-x-8 text-back-100 font-lato-regular items-center">
              <li onClick={() => scrollToSection('about')} className="text-back-100 hover:text-other-100 font-lato-regular">About</li>
              <li onClick={() => scrollToSection('projects')} className="text-back-100 hover:text-other-100 font-lato-regular">Experience</li>
              <li onClick={() => scrollToSection('otherProjects')} className="text-back-100 hover:text-other-100 font-lato-regular">Projects</li>
              <li onClick={() => scrollToSection('nextSteps')} className="text-back-100 hover:text-other-100 font-lato-regular">Contact</li>
            </ul>
          </div>
          <div className="block sm:hidden">
            <button onClick={handleShowMenu} className="inline-flex items-center justify-center p-2 rounded-md text-back-100 hover:text-other-100 hover:text-opacity-20">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div
            className={`fixed  flex flex-col items-center justify-center gap-8 p-8 w-[75%] z-20 right-0 h-screen sm:sticky top-0 bg-back-400 sm:bg-transparent transition-all ${
              showMenu ? "sm:hidden" : "opacity-0 pointer-events-none sm:opacity-100 sm:pointer-events-auto sm:hidden"
            }`}
          >
            {
              showMenu ?
              <>
                <button onClick={() => handleScrollFromMenu('about')} className="flex gap-4 items-center w-full font-gilroy-regular text-lg text-white px-4 py-2 rounded-lg drop-shadow-lg border border-white hover:bg-gray-100" >
                  <i class="fa-solid fa-diagram-project"></i>
                  <div>About</div>
                </button>
                <button onClick={() => handleScrollFromMenu('projects')} className="flex gap-4 items-center w-full font-gilroy-regular text-lg text-white px-4 py-2 rounded-lg drop-shadow-lg border border-white hover:bg-gray-100" >
                  <i class="fa-solid fa-diagram-project"></i>
                  <div>Experience</div>
                </button>
                <button onClick={() => handleScrollFromMenu('otherProjects')} className="flex gap-4 items-center w-full font-gilroy-regular text-lg text-white px-4 py-2 rounded-lg drop-shadow-lg border border-white hover:bg-gray-100" >
                  <i class="fa-solid fa-diagram-project"></i>
                  <div>Notable Projects</div>
                </button>
                <button onClick={() => handleScrollFromMenu('nextSteps')} className="flex gap-4 items-center w-full font-gilroy-regular text-lg text-white px-4 py-2 rounded-lg drop-shadow-lg border border-white hover:bg-gray-100" >
                  <i class="fa-solid fa-diagram-project"></i>
                  <div>Contact</div>
                </button>
                <button onClick={handleScrollFromMenu} className="flex gap-4 items-center font-gilroy-bold text-lg text-white px-4 py-2 rounded-full drop-shadow-lg border border-white hover:bg-gray-100"  onClick={() => {setShowMenu(false)}}>
                  X
                </button>
              </>
              :
              ""
            }
          </div>
      </div>
    </div>
  );
}

export default Navbar;
