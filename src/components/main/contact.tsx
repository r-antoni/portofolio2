import Link from "next/link"
import Social from "../sub/social"
import MagicButton from "../ui/magic-button"

const Contact = () => {
  return (
    <section id='contact' className="flex flex-col justify-center items-center pb-20 z-50">
      <div className="flex flex-col items-center gap-5 tracking-wide">
        <p className="text-2xl text-greentext font-semibold flex items-center tracking-wide">
          <span className="text-white"> What&apos;s Next ?</span>
        </p>
        <h2 className="text-4xl font-semibold text-accent">Get In Touch</h2>
        <p className="max-w-[600px] text-center text-body">
          If you have any question or have an offer for me, feel free to contact me on any social media or through my email.
        </p>
        <Link href="mailto:reindraantoni@gmail.com" target="_blank" className="py-5">
          <MagicButton title="Say Hello" />
        </Link>
      </div>
      <Social />
    </section>
  )
}

export default Contact