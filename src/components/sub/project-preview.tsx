"use client"

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

interface Props {
    name: string;
    image: string;
    desc: string;
    link: string;
    wrapper: string;
    item: string;
    margin: string;
}


const ProjectPreview = ({name, image, desc, link, wrapper, item, margin} : Props) => {
  const styles = {
    previewWrapper: "flex flex-col xl:flex-row gap-5 pb-10",
    imageWrapper: "w-full xl:w-1/2 h-auto relative group",
    image: "rounded-lg",
    detailWrapper:
      "w-full xl:w-1/2 flex flex-col lg:justify-between items-center xl:items-end text-right xl:-ml-16 gap-5 z-10",
    category: "text-greentext text-sm tracking-widest",
    title: "text-2xl font-bold",
    detail: "bg-accent text-sm md:text-base p-2 md:p-6 rounded-md text-center",
    detailButton: "flex gap-5 mx-auto",
  };

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
        <p className="text-greentext text-sm tracking-widest">Featured Project</p>
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className= "bg-accent text-sm md:text-base p-4 md:p-10 rounded-md text-center max-w-2xl">
         {desc}
        </p>
        <div className="flex gap-5 mx-auto">
          <Link href={link}>
            <button>AA</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};


export default ProjectPreview