import React, { useCallback, useState, useEffect, useMemo, useRef } from "react";
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.css';

const OtherProjects = React.forwardRef((props, ref) => {

  const [projectOne, setProjectOne] = useState({
    name: 'A sleek image customizer to showcase maxin art.',
    description: 'Built a custom website where users can randomize the traits from NFT collection into different combinations and download their creation to post on twitter.',
    tools: ["React.js", "Tailwind", "Python", "AWS"],
    link: "https://www.maxinout.com/",
    githubLink: "https://github.com/augustolimonti/maxinCustomizer"
  })
  const [projectTwo, setProjectTwo] = useState({
    name: 'A 3D customizer and trait store for Astrals NFTs.',
    description: 'Built a custom website for Astrals that enables their users to mint 3D art, buy 3D traits, and customize their 3D avatars.',
    tools: ["React.js", "Metaplex", "Python", "AWS"],
    link: "https://astrals-new.vercel.app/astrals"
  })
  const [projectThree, setProjectThree] = useState({
    name: 'The Goons Market & Trait Swapping Mechanics',
    description: 'Built a trait swapping solution that enables equipping and de-equipping traits to Goon NFTs as well as a point system for acquiring new trait drops.',
    tools: ["React.js", "Metaplex", "Python", "AWS"],
    link: "https://traits.retrogoons.xyz/"
  })
  const [projectFour, setProjectFour] = useState({
    name: 'A B2B SaaS web3 Trait Slot Machine.',
    description: 'Built a custom website where users can randomize the traits from NFT collection into different combinations and download their creation to post on twitter.',
    tools: ["React.js", "Tailwind", "Python", "AWS"],
    link: "https://www.body-shop.xyz/udderchaos"
  })
  const [projectFive, setProjectFive] = useState({
    name: 'A blockchain-based live comics website.',
    description: 'Built a live comics website with token-gated access through wallet authentication and created the underlying technologies used to host unique stories.',
    tools: ["React.js", "Tailwind", "Python", "AWS"],
    link: "https://www.o2comics.com/"
  })
  const [projectSix, setProjectSix] = useState({
    name: 'A B2B SaaS meme generator.',
    description: 'Built a meme generator available for all projects to leverage to promote their project and entice community participation in meme culture.',
    tools: ["React.js", "Tailwind", "AWS", "Python"],
    link: "https://www.body-shop.xyz/tacotribe"
  })

  const [allProjects, setAllProjects] = useState([
    projectOne,
    projectTwo,
    projectThree,
    projectFour,
    projectFive,
    projectSix
  ])

  return (
    <div ref={ref}>
      <div className="flex justify-center items-center h-full xl:h-screen xl:mb-0">
        <div className="h-4/5 w-[90%] md:w-3/5 items-start">
          <div className="flex flex-rows gap-4 justify-center items-center mb-8">
            <hr className="border-back-400 border-t-1 self-center -mt-3 w-full" />
            <div className="flex text-xl lg:text-4xl 3xl:text-6xl justify-center items-center text-center font-lato-regular mb-2 text-back-400 min-w-[150px] md:min-w-[300px] 3xl:min-w-[500px]">
              Other Projects
            </div>
            <hr className="border-back-400 border-t-1 self-center -mt-3 w-full" />
          </div>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {
                allProjects.map((project) => {
                  return (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <div className="flex flex-col items-center justify-center w-full h-full bg-back-300 bg-opacity-50 p-6 lg:p-8 rounded-lg cursor-pointer transition ease-in-out hover:-translate-y-2">
                        <div class="flex w-full min-h-[5vh] justify-between items-start text-back-100 text-2xl 3xl:text-4xl">
                          <i class="fa-solid fa-diagram-project text-back-400"></i>
                          <div className="flex gap-2">
                            {
                              project.githubLink ?
                              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-other-100">
                                <i class="fab fa-github"></i>
                              </a>
                              :
                              ""
                            }
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-other-100">
                              <i class="fa-solid fa-link"></i>
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start text-md lg:text-lg 3xl:text-2xl text-start text-back-400 font-bold w-full min-h-[7vh]" style={{ lineHeight: '1.2' }}>
                          {project.name}
                        </div>
                        <div className="flex items-start text-sm lg:text-md 3xl:text-xl text-start text-back-100 font-lato-bold w-full min-h-[12vh]">
                          {project.description}
                        </div>
                        <div className="flex grid grid-cols-4 gap-1 items-end justify-center w-full min-h-[5vh]">
                          {
                          project.tools.map((tool) => {
                            return (
                              <div className="bg-back-400 w-full h-[75%] bg-opacity-50 rounded-lg flex items-center justify-center text-center text-back-100 text-[8px] lg:text-[50%] 3xl:text-[100%] px-1">
                              {tool}
                              </div>
                            )
                          })
                        }
                        </div>
                      </div>
                    </a>
                  )
                })
            }
          </div>
        </div>
      </div>
    </div>
  );
});

export default OtherProjects;
