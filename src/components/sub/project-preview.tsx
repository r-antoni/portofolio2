"use client"

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { FaGithub, FaGlobe, FaYoutube } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface Props {
    name: string;
    image: string;
    desc: string;
    link: string;
    github: string;
    yt: string;
    wrapper: string;
    item: string;
    margin: string;
}

const ProjectPreview = ({name, image, desc, link, github, yt, wrapper, item, margin} : Props) => {
  return (
    <motion.div 
    initial={{
      y: 200,
      opacity:0
    }}
    transition={{duration: 1.25}}
    whileInView={{y:0, opacity:1}}
    viewport={{once: true}}
    className={`flex flex-col ${wrapper} gap-5 pb-40`}>
      <Link href={link} className="w-full xl:w-1/2 h-auto relative group">
        <Image src={image} alt={name} width={650} height={650} className="rounded-lg" />
      </Link>
      <div className={`w-full xl:w-1/2 flex flex-col lg:justify-between items-center ${item} text-right ${margin} gap-5 z-10`}>
        <p className="text-accent text-sm tracking-widest">Featured Project</p>
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className= "bg-accent text-sm md:text-base p-4 md:p-10 rounded-md text-center max-w-2xl">
         {desc}
        </p>
        <div className="flex items-center gap-5 mx-auto">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link href={link}>
                  <FaGlobe size={24} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Visit Website</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Link href={link}>
                <FaGithub size={24} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Check Github</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <Link href={link}>
                <FaYoutube size={28} />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>View Demo</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </motion.div>
  );
};


export default ProjectPreview