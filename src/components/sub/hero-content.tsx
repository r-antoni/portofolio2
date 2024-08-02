import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "../ui/button"
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { slideInFromLeft, slideInFromRight } from "@/lib/utils/motion";
import Image from "next/image";


const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <motion.div 
      variants={slideInFromLeft(0.5)} 
      className="flex flex-col justify-center text-start gap-10 pl-2 m-auto w-full h-full">
       <p className="text-4xl md:text-6xl">Reindra Antoni, <br />Fullstack Web Developer</p>
       <p>I'm a junior fullstack web developer specialized in react techstack. <br />Based in Bandung, Indonesia</p>
       <div className="flex flex-col md:flex-row gap-5">
          <div className="flex items-center gap-3">
            <MdEmail size={20} />
            <Link href="mailto:reindraantoni@gmail.com">
              <p>reindraantoni@gmail.com</p>
            </Link>
          </div>
          <div className="flex items-center gap-3">
          <FaLinkedinIn size={16} />
            <Link href="/">
              <p>Reindra Antoni</p>
            </Link>
          </div>
       </div>
       <Button className="w-40" size="sm">View Work</Button>
      </motion.div>
      <motion.div
      variants={slideInFromRight(0.5)}
      className="flex justify-center items-center pl-20 w-full h-full"
      >
        <Image src="/mainIconsdark.svg" alt="Icons" width={600} height={600}/>
      </motion.div>
    </motion.div>
  )
}

export default HeroContent