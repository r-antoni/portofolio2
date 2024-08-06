import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "../ui/button"
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";


const HeroContent = () => {
  return (
    <motion.div
    animate="visible"
    className="flex flex-row items-center justify-center md:px-10 py-10 mt-40 w-full z-[20]"
    >
      <motion.div 
          initial={{
            x: -200,
            opacity:0
          }}
          transition={{duration: 1.25}}
          whileInView={{x:0, opacity:1}}
          viewport={{once: true}}
      className="flex flex-col justify-center text-start gap-10 pl-2 m-auto w-full h-full">
       <p className="text-4xl md:text-6xl">Reindra Antoni, Fullstack Web Developer</p>
       <p>I&apos;m a junior react fullstack web developer. <br />Based in Bandung, Indonesia</p>
       <div className="flex flex-col md:flex-row gap-5">
          <div className="flex items-center gap-3">
            <MdEmail size={20} />
            <Link href="mailto:reindraantoni@gmail.com">
              <p>reindraantoni@gmail.com</p>
            </Link>
          </div>
          <div className="flex items-center gap-3">
          <FaLinkedinIn size={16} />
            <Link href="https://www.linkedin.com/in/reindra-antoni/">
              <p>Reindra Antoni</p>
            </Link>
          </div>
       </div>
       <Link href="/#projects">
          <Button className="w-40 bg-accent" size="sm">View Work</Button>
       </Link>
      </motion.div>
      <motion.div
          initial={{
            x: 200,
            opacity:0
          }}
          transition={{duration: 1.25}}
          whileInView={{x:0, opacity:1}}
          viewport={{once: true}}
      className="hidden md:flex justify-center items-center ml-[400px] w-full h-full"
      >
        <Image src="/mainIconsdark.svg" alt="Icons" width={600} height={600}/>
      </motion.div>
    </motion.div>
  )
}

export default HeroContent