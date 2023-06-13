import React from "react";
import '../App.css';
import AguImage from '../img/augustoImage.jpeg'
import AguContact from '../img/aguContact.png'
import '@fortawesome/fontawesome-free/css/all.css';

const ContactSection = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="min-h-screen mt-24">
      <div className="flex justify-center items-center h-full xl:h-screen xl:mb-0">
         <div className="h-4/5 w-[90%] md:w-3/5 items-start">
          <div className="flex flex-rows gap-4 justify-center items-center mb-8">
            <hr className="border-back-400 border-t-1 self-center -mt-3 w-full" />
            <div className="flex text-xl lg:text-4xl 3xl:text-6xl justify-center items-center text-center font-lato-regular mb-2 text-back-400 min-w-[150px] md:min-w-[300px] 3xl:min-w-[500px]">
              Contact
            </div>
            <hr className="border-back-400 border-t-1 self-center -mt-3 w-full" />
          </div>
          <div className="grid lg:grid-cols-[1.3fr,1fr] gap-12">
            <div className="flex relative text-back-300 justify-center items-center">
              <div style={{position: 'relative', display: 'block' }} className="group">
                <img className="w-full rounded-full transition-all duration-500 group-hover:opacity-100" src={AguContact} />
                <div className="absolute inset-0 w-full h-full rounded-full bg-back-300 opacity-50 transition-opacity duration-500 group-hover:opacity-0"></div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-left text-sm lg:text-lg 3xl:text-2xl text-back-400 font-lato-bold gap-8">
              <div>
                Step into my world!
              </div>
              <div>
                Whether you are looking to hire an experienced software engineer, have a question or just want to say hi. Feel free to reach out.
              </div>
              <div>

                And thank you in advance for your time and consideration!

              </div>
              <a href="mailto:agulimonti09@gmail.com">
                <div className="text-2xl lg:text-4xl 3xl:text-6xl font-bold hover:text-other-100">
                  agulimonti@gmail.com
                </div>
              </a>
            </div>
          </div>
         </div>
      </div>
    </div>
  );
});

export default ContactSection;
