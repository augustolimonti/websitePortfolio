import React, { useCallback, useState, useEffect, useMemo, useRef } from "react";
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.css';


export default function ProjectItems({
  name,
  features,
  tools,
  description,
  link,
  gitLink,
  images
}) {

  const [currentImage, setCurrentImage] = useState(0);
  const [opacity, setOpacity] = useState(1);

  // function to alternate between images
  useEffect(() => {
    const timer = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setCurrentImage((currentImage + 1) % images.length);
        setOpacity(1);
      }, 1000);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [currentImage]);

  return (
    <div className="grid lg:grid-cols-2 gap-12 w-full h-full lg:min-h-[500px] 2xl:min-h-[750px] relative">
      <div className="flex flex-col items-center justify-center gap-8">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="absolute left-0 lg:top-1/2 transform -translate-y-1/2  w-3/4 lg:h-3/4 rounded-xl bg-back-300 opacity-50 transition-opacity duration-500 z-10 hover:opacity-0"></div>
          <img src={images[currentImage]} className="absolute left-0 top-1/2 transform -translate-y-1/2 lg:w-3/4 lg:h-3/4 z-0 object-cover rounded-xl lg:border lg:border-back-400 hover:border-other-100 hidden lg:block"/>
        </a>
      </div>
      <div className="flex flex-col justify-center text-end z-20">
        <div className="font-lato-bold text-xs lg:text-sm 3xl:text-lg text-back-200">
          web3 application
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="text-back-400 text-lg lg:text-2xl 3xl:text-4xl font-bold mb-1 lg:mb-4 hover:text-back-200">
            {name}
          </div>
        </a>
        <img src={images[currentImage]} className="w-full h-[200px] md:h-[300px] mb-2 z-0 object-cover rounded-xl border border-back-400 hover:border-other-100 lg:hidden block"/>
        <div className="bg-white shadow-xl rounded-lg text-[10px] lg:text-sm 3xl:text-lg text-back-300 font-lato-bold mb-4 p-2 lg:p-4">
          {description}
        </div>
        <div className="flex grid grid-cols-4 grid-rows-2 gap-2 items-center justify-center mb-1 lg:mb-4">
            {
              tools.map((tool) => {
                return (
                  <div className="bg-back-300 w-full h-full rounded-lg flex items-center justify-center text-center text-back-100 text-[10px] lg:text-xs 3xl:text-md p-1 shadow-xl">
                  {tool}
                  </div>
                )
              })
            }
        </div>
        <div className="flex justify-end items-center text-center gap-3 text-lg lg:text-2xl 3xl:text-4xl text-other-100 mt-2">
          <a href={gitLink} target="_blank" rel="noopener noreferrer" className="hover:text-back-200">
            <i class="fab fa-github"></i>
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-back-200">
            <i class="fa-solid fa-link"></i>
          </a>
        </div>
      </div>
    </div>
  )


}
