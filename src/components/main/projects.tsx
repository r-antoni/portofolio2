import { projectData } from '@/lib/data'
import ProjectPreview from '../sub/project-preview'

const Projects = () => {
  return (
    <section id='projects' className='flex flex-col justify-center items-center gap-10 max-w-7xl mx-auto px-5 py-32 z-40'>
      <h2 className="text-4xl pb-5">Projects</h2>
      <div className='"flex flex-col justify-center items-center w-full mt-10"'>
          {projectData.map((project, index) => (
            <ProjectPreview
            key={index}
            name={project.name}
            image= {project.image}
            desc= {project.desc}
            link= {project.link}
            github= {project.github}
            yt= {project.yt}
            wrapper= {project.wrapper}
            item= {project.item}
            margin= {project.margin}
            />
          ))}
      </div>
    </section>
  )
}

export default Projects