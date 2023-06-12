import React from "react";
import '../App.css';
import AguImage from '../img/augustoImage.jpeg'
import AguImageOverlay from '../img/augustoImageOverlay.png'
import '@fortawesome/fontawesome-free/css/all.css';

const AboutSection = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className="flex justify-center items-center h-full mb-16">
         <div className="h-4/5 w-[90%] md:w-3/5 items-start">
            <div className="flex flex-rows gap-4 justify-center items-center mb-8">
              <hr className="border-back-400 border-t-1 self-center -mt-3 w-full" />
              <div className="flex text-xl lg:text-4xl 3xl:text-6xl justify-center items-center font-lato-regular mb-2 text-back-400 min-w-[150px] md:min-w-[300px] 3xl:min-w-[500px]">
                About Me
              </div>
              <hr className="border-back-400 border-t-1 self-center -mt-3 w-full" />
            </div>
            <div className="grid md:grid-cols-[1.3fr,1fr] gap-12">
              <div className="text-sm lg:text-lg 3xl:text-2xl text-back-400 font-lato-bold mb-6 ">
                <div className="mb-4">
                  Nice to meet you! My name is Augusto, and I have a deep passion for crafting efficient and elegant software solutions to meet a variety of needs.
                </div>
                <div className="mb-4">
                I am a serial start-up engineer with experience in bringing products/apps to market and building tech stacks from scratch. To date, I have been fortunate to work in various environments,
                including an <a href="https://thestoryroom.com/" target="_blank" rel="noopener noreferrer" className="text-other-100 hover:underline">advertising agency</a>,
                a <a href="https://www.tcs.com/" target="_blank" rel="noopener noreferrer" className="text-other-100 hover:underline">large tech consultancy</a>,
                and as an <a href="https://o2-labs.xyz/" target="_blank" rel="noopener noreferrer" className="text-other-100 hover:underline">entrepreneur</a>.
                </div>
                <div className="mb-4">
                I also recently built <a href="https://www.body-shop.xyz/" target="_blank" rel="noopener noreferrer" className="text-other-100 hover:underline">The Body Shop</a>,
                a B2B SaaS web3 product that simplifies NFT trait shop management and customization platforms.
                </div>
                <div className="mb-4">
                  Having gained invaluable experience while running my own business for over two years, I am confident I can make an immediate impact at your company.
                  Aside from my technical proficiency, I possess strong skills in creative problem-solving, innovative product strategy, and decisive decision-making.
                </div>
              </div>
              <div className="flex relative text-back-300 text-[80%] justify-center items-center">
                <div style={{position: 'relative', display: 'block' }} className="group">
                  <img className="w-full rounded-full transition-all duration-500 group-hover:opacity-100" src={AguImage} />
                  <div className="absolute inset-0 w-full h-full rounded-full bg-back-300 opacity-50 transition-opacity duration-500 group-hover:opacity-0"></div>
                  <div className="absolute top-[15%] left-0 w-1/4 h-1/4 bg-white bg-opacity-70 border border-back-300 rounded-full flex items-center justify-center transition-all duration-500 group-hover:left-[-5%] group-hover:bg-back-300 group-hover:text-other-100 group-hover:bg-opacity-50 group-hover:border-other-100">
                    <div className="flex flex-col justify-center items-center p-2">
                      <i className="fas fa-code text-other-100"></i>
                      JavaScript
                    </div>
                  </div>
                  <div className="absolute top-[15%] right-0 w-1/4 h-1/4 bg-white bg-opacity-70 border border-back-300 rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[-5%] group-hover:bg-back-300 group-hover:text-other-100 group-hover:bg-opacity-50 group-hover:border-other-100">
                    <div className="flex flex-col justify-center items-center p-2">
                      <i className="fas fa-database text-other-100"></i>
                      MySQL
                    </div>
                  </div>
                  <div className="absolute -bottom-10 left-[37%] w-1/4 h-1/4 bg-white bg-opacity-70 border border-back-300 rounded-full flex items-center justify-center transition-all duration-500 group-hover:-bottom-14 group-hover:bg-back-300 group-hover:text-other-100 group-hover:bg-opacity-50 group-hover:border-other-100">
                    <div className="flex flex-col justify-center items-center p-2">
                      <i className="fab fa-react text-other-100"></i>
                      React.js
                    </div>
                  </div>
                  <div className="absolute -top-10 left-[37%] w-1/4 h-1/4 bg-white bg-opacity-70 border border-back-300 rounded-full flex items-center justify-center transition-all duration-500 group-hover:-top-14 group-hover:bg-back-300 group-hover:text-other-100 group-hover:bg-opacity-50 group-hover:border-other-100">
                    <div className="flex flex-col justify-center items-center p-2">
                      <i className="fas fa-paint-brush text-other-100"></i>
                      Tailwind
                    </div>
                  </div>
                  <div className="absolute bottom-[15%] left-0 w-1/4 h-1/4 bg-white bg-opacity-70 border border-back-300 rounded-full flex items-center justify-center transition-all duration-500 group-hover:left-[-5%] group-hover:bg-back-300 group-hover:text-other-100 group-hover:bg-opacity-50 group-hover:border-other-100">
                    <div className="flex flex-col justify-center items-center p-2">
                      <i className="fab fa-python text-other-100"></i>
                      Python
                    </div>
                  </div>
                  <div className="absolute bottom-[15%] right-0 w-1/4 h-1/4 bg-white bg-white bg-opacity-70 border border-back-300 rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[-5%] group-hover:bg-back-300 group-hover:text-other-100 group-hover:bg-opacity-50 group-hover:border-other-100">
                    <div className="flex flex-col justify-center items-center p-2">
                      <i className="fas fa-cloud text-other-100"></i>
                      AWS
                    </div>
                  </div>
                </div>
              </div>
            </div>
         </div>
      </div>
    </div>
  );
});

export default AboutSection;
