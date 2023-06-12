import React, { useCallback, useState, useEffect, useMemo, useRef } from "react";
import '../App.css';
import AguImage from '../img/augustoImage.jpeg'
import AguImageOverlay from '../img/augustoImageOverlay.png'
import BodyShopIMG from '../img/BodyShop.png'
import BodyShopIMGTwo from '../img/BodyShopTwo.png'
import BodyShopIMGThree from '../img/BodyShopThree.png'
import BodyDashIMG from '../img/BodyDash.png'
import BodyDashIMGTwo from '../img/BodyDashTwo.png'
import BodyDashIMGThree from '../img/BodyDashThree.png'
import RaffleShopIMG from '../img/raffleShop.png'
import RaffleShopIMGTwo from '../img/raffleTwo.png'
import RaffleShopIMGThree from '../img/raffleThree.png'
import '@fortawesome/fontawesome-free/css/all.css';
import Carousel, { consts } from 'react-elastic-carousel';
import ProjectItems from './ProjectItems'

const ProjectSection = React.forwardRef((props, ref) => {

  // Info Project 1
  const [bodyShopTools, setBodyShopTools] = useState([
    'React', 'MySQL', 'Metaplex',
    'AWS Lambda', 'AWS RDS', 'S3 Bucket', 'Web3 API',
    'Python'
  ])
  const [bodyShopDescription, setBodyShopDescription] = useState("A B2B SaaS web3 product that offers a no-code solution for any NFT project on Solana to create and manage their own trait shop and customization platform to enable NFT trait swapping, fusions, and mutations through metadata upgrades.")
  const [bodyShopLink, setBodyShopLink] = useState('https://www.body-shop.xyz/')
  const [bodyShopGit, setBodyShopGit] = useState('https://github.com/augustolimonti/BodyShopSample')
  const [bodyShopImages, setBodyShopImages] = useState([BodyShopIMG, BodyShopIMGTwo, BodyShopIMGThree])
  const [projectOneDetails, setProjectOneDetails] = useState({
      name: "The Body Shop",
      tools: bodyShopTools,
      description: bodyShopDescription,
      link: bodyShopLink,
      gitLink: bodyShopGit,
      images: bodyShopImages
  })

  // Info Project 1
  const [bodyShopDashTools, setbodyShopDashTools] = useState([
    'React', 'MySQL', 'Metaplex',
    'AWS Lambda', 'AWS RDS', 'S3 Bucket', 'Web3 API',
    'Python'
  ])
  const [bodyShopDashDescription, setbodyShopDashDescription] = useState("The Body Shop comes equipped with a state of the art Dashboard where project owners can manage their own trait shop and customization platform for their NFT collection without any previous coding knowledge.")
  const [bodyShopDashLink, setbodyShopDashLink] = useState('https://bodyshop-dash.xyz/')
  const [bodyShopDashGit, setbodyShopDashGit] = useState('https://github.com/augustolimonti/BodyShopSample')
  const [bodyShopDashImages, setbodyShopDashImages] = useState([BodyDashIMG, BodyDashIMGTwo, BodyDashIMGThree])
  const [projectTwoDetails, setProjectTwoDetails] = useState({
      name: "The Body Dash",
      tools: bodyShopDashTools,
      description: bodyShopDashDescription,
      link: bodyShopDashLink,
      gitLink: bodyShopDashGit,
      images: bodyShopDashImages
  })

  // Info Project 3
  const [raffleShopTools, setRaffleShopTools] = useState([
    'React', 'Node.js', 'Solidity', 'Ethers',
    'AWS Lambda', 'AWS EC2', 'AWS RDS', 'Python'
  ])
  const [raffleShopDescription, setRaffleShopDescription] = useState("A peer-to-peer protocol that allows users to host and join raffles for NFTs (both ERC721 and ERC1155 tokens) on the Polygon Blockchain.")
  const [raffleShopLink, setRaffleShopLink] = useState('https://www.maxinraffles.com/')
  const [raffleShopGit, setRaffleShopGit] = useState('https://github.com/augustolimonti/RaffleShopSample')
  const [raffleShopImages, setRaffleShopImages] = useState([RaffleShopIMG, RaffleShopIMGTwo, RaffleShopIMGThree])
  const [projectThreeDetails, setProjectThreeDetails] = useState({
      name: "Raffle Store",
      tools: raffleShopTools,
      description: raffleShopDescription,
      link: raffleShopLink,
      gitLink: raffleShopGit,
      images: raffleShopImages
  })

  // allProjectsArray
  const [allProjects, setAllProjects] = useState([projectOneDetails, projectTwoDetails, projectThreeDetails])

  const carouselRef = useRef();
  const totalPages = Math.ceil(allProjects.length / 1)
  let resetTimeout;

  return (
    <div ref={ref}>
      <div className="flex flex-col justify-center items-center h-full mb-16">
         <div className="h-4/5 w-[90%] md:w-3/5 items-start">
           <div className="flex flex-rows gap-4 justify-center items-center">
             <hr className="border-back-400 border-t-1 self-center -mt-3 w-full" />
             <div className="flex text-xl lg:text-4xl 3xl:text-6xl justify-center items-center font-lato-regular mb-2 text-back-400 min-w-[150px] md:min-w-[300px] 3xl:min-w-[500px]">
               Recent Projects
             </div>
             <hr className="border-back-400 border-t-1 self-center -mt-3 w-full" />
           </div>
         </div>
         <div className ="w-[75%] items-start .rec.rec-arrow hidden md:block">
           <Carousel
             ref={carouselRef}
             itemsToShow={1}
             pagination={false}
             itemPadding={[0, 20]}
             onNextStart={(currentItem, nextItem) => {
               if (currentItem.index === nextItem.index) {
                 // we hit the last item, go to first item
                 if (carouselRef.current) {
                   carouselRef.current.goTo(0)
                 }
               }
             }}
             onPrevStart={(currentItem, nextItem) => {
               if (currentItem.index === nextItem.index) {
                 // we hit the first item, go to last item
                 console.log('go to first', currentItem.index, nextItem.index)
                 if (carouselRef.current) {
                   carouselRef.current.goTo(allProjects.length);
                 }
               }
             }}
             disableArrowsOnEnd={false}
            >
             {allProjects.map((project) => (
               <ProjectItems
                 name={project.name}
                 features={project.features}
                 tools={project.tools}
                 description={project.description}
                 link={project.link}
                 gitLink = {project.gitLink}
                 images = {project.images}
               />
             ))}
           </Carousel>
         </div>
         <div className = "px-6 block md:hidden">
         {allProjects.map((project) => (
           <ProjectItems
             name={project.name}
             features={project.features}
             tools={project.tools}
             description={project.description}
             link={project.link}
             gitLink = {project.gitLink}
             images = {project.images}
           />
         ))}
         </div>
      </div>
    </div>
  );
});

export default ProjectSection;
