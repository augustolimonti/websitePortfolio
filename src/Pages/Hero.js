import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import { Document, Page } from 'react-pdf';

const HeroSection = React.forwardRef((props, ref) =>  {
  return (
    <div ref={ref}>
      <div className="flex justify-center items-center h-screen">
        <div className="w-[90%] md:w-3/5 items-center">
           <div className="text-3xl md:text-6xl 3xl:text-8xl font-bold mb-2 md:mb-4 text-back-400">
              Augusto Limonti.
           </div>
           <div className="text-2xl md:text-6xl 3xl:text-8xl font-bold mb-4 text-back-300">
              Engineering digital experiences to drive success.
           </div>
           <div className="text-sm md:text-xl 3xl:text-2xl text-back-200 font-lato-bold mb-6 md:w-4/5">
              As a dedicated <span className="text-other-100">software engineer</span>, I'm committed to developing solutions that help drive progress. With a curious mind and a passion for innovation, I thrive in collaborative environments where I can apply my skills and learn from others.
           </div>
           <div className="flex items-center text-back-200 hover:text-other-100">
              <div onClick={() => props.scrollToSection('about')} className="font-lato-bold text-lg md:text-xl 3xl:text-2xl mb-8">
                Learn More About Me
              </div>
              <i className="fas fa-arrow-right bounce ml-2 -mt-7"></i>
           </div>
           <a href="/resume.pdf" target="_blank" className="flex justify-center items-center text-center text-sm md:text-lg text-other-100 border-2 border-other-100 rounded-xl py-2 px-8 w-[15%] min-w-[100px] hover:bg-other-100 hover:bg-opacity-10">
              Resume
           </a>
        </div>
      </div>
    </div>
  );
});

export default HeroSection;
