import { skillData } from "@/lib/data"
import Link from "next/link"
import SkillProvider from "../sub/skill-provider"


const About = () => {
  return (
    <section id="about" className="flex flex-col justify-center items-center gap-10 md:gap-20 z-30 px-10 md:px-10 h-auto">
        <div className="flex flex-col justify-center items-center gap-5 w-fit">
            <h2 className="text-4xl">About</h2>
            <p>Hi again, I'm Reindra a fullstack web developer that specialized in react techstack based in Bandung. I love to explore and try new tech and also building impactful projects. Even though I'm a fullstack dev, I'm leaning more towards frontend development, but I'm open to both when opportunity arise.</p>
            <p>You can check out some of <Link href="/#projects"> <button className="text-accent">My Work</button></Link>  below. I'm passionate about research, analysis, and ensuring code scalability and quality. I take immense pride in my work and have a deep love for the code I create. If you have any questions, please feel free to reach out to me on<Link href="/#projects"> <button className="text-accent">LinkedIn</button></Link>. I'd be happy to answer them.</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
            <h2 className="text-4xl">Tools</h2>
            <div className="flex justify-center items-center gap-10 h-10" style={{transform: "scale(0.9)"}}>
                {skillData.map((image, index) => (
                  <SkillProvider
                    key={index} 
                    src={image.Image}
                    width={image.width}
                    height={image.height}
                    index={index}
                  />
                ))}
            </div>  
        </div>
    </section>
  )
}

export default About