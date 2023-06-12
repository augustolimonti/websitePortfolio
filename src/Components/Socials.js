import '../App.css';
import { useState, useEffect, useRef, useCallback } from 'react';


const Socials = (props) => {

  return (
    <div className="bg-white fixed left-0 top-1/2 transform translate-y-[-50%] w-[60px] h-[250px] flex items-center justify-center shadow-2xl hidden md:block">
      <div className="grid grid-col-4 w-full h-full p-2">
        <div className="flex justify-center items-center text-back-300 hover:bg-back-100 hover:text-other-100 rounded-xl">
          <a href="https://github.com/augustolimonti" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github text-2xl"></i>
          </a>
        </div>
        <div className="flex justify-center items-center text-back-300 hover:bg-back-100 hover:text-other-100 rounded-xl">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-link text-2xl"></i>
          </a>
        </div>
        <div className="flex justify-center items-center text-back-300 hover:bg-back-100 hover:text-other-100 rounded-xl">
          <a href="https://www.linkedin.com/in/augusto-limonti-389679b8/" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-linkedin-in text-2xl"></i>
          </a>
        </div>
        <div className="flex justify-center items-center text-back-300 hover:bg-back-100 hover:text-other-100 rounded-xl">
          <a href="mailto:agulimonti09@gmail.com">
            <i class="fa-solid fa-envelope text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  )
}


export default Socials;
