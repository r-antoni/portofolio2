import HeroContent from "../sub/hero-content"

const Hero = () => {
  return (
    <section className="relative flex flex-col w-full h-full">
      <video
      autoPlay
      muted
      loop
      className="rotate-180 absolute top-[-380px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm"/>
      </video>
      <HeroContent />
    </section>
  )
}

export default Hero