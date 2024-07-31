
const Hero = () => {
  return (
    <section className="relative flex flex-col w-full h-full">
      <video
      autoPlay
      muted
      loop
      className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm"/>
      </video>
    </section>
  )
}

export default Hero