import ProjectPreview from '../sub/project-preview'

const Projects = () => {
  return (
    <section id='projects' className='flex flex-col justify-center items-center gap-10 max-w-7xl mx-auto px-5 py-32 z-40'>
      <h2>Projects</h2>
      <div className='"flex flex-col justify-center items-center w-full mt-10"'>
          <ProjectPreview 
          name="CryptoHub"
          image="/cryptohub.png"
          desc='GlobeTix is a fullstack travel booking website, with several destination to choose in Indonesia. It is created
          using Next.js 13 with Next.js app router and TailwindCSS, it is also using Stripe for payment checkout.'
          link='https://cryptohub-vert.vercel.app/'
          wrapper='xl:flex-row-reverse'
          item='items-start'
          margin='xl:-mr-16'
          />
          <ProjectPreview 
          name="CryptoHub"
          image="/cryptohub.png"
          desc='GlobeTix is a fullstack travel booking website, with several destination to choose in Indonesia. It is created
          using Next.js 13 with Next.js app router and TailwindCSS, it is also using Stripe for payment checkout.'
          link='https://cryptohub-vert.vercel.app/'
          wrapper='xl:flex-row'
          item='items-end'
          margin='xl:-ml-16'
          />
          <ProjectPreview 
          name="CryptoHub"
          image="/cryptohub.png"
          desc='GlobeTix is a fullstack travel booking website, with several destination to choose in Indonesia. It is created
          using Next.js 13 with Next.js app router and TailwindCSS, it is also using Stripe for payment checkout.'
          link='https://cryptohub-vert.vercel.app/'
          wrapper='xl:flex-row-reverse'
          item='items-start'
          margin='xl:-mr-16'
          />
      </div>
    </section>
  )
}

export default Projects