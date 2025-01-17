import React from 'react'

const MagicButton = ({title} : {title:string}) => {
  return (
    <button className="relative inline-flex h-8 md:h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-accent-hover focus:ring-offset-2 focus:ring-offset-accent-hover">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-accent px-5 xl:py-1 text-xs xl:text-sm font-medium text-white backdrop-blur-3xl hover:bg-white hover:text-accent">
            {title}
        </span>
    </button>
  )
}

export default MagicButton