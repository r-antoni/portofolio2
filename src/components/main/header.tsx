import Image from 'next/image'
import React from 'react'
import MagicButton from '../ui/magic-button'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='absolute flex justify-between items-center top-5 w-full h-16 z-50 md:px-10'>
        <Link href="/">
            <Image src="/logo.png" alt='Portofolio Logo' width={130} height={130} />
        </Link>
        <div className='pr-8 md:pr-10'>
            <Link href="https://www.linkedin.com/in/reindra-antoni/">
                <MagicButton title='Hire Me' />
            </Link>
        </div>
    </header>
  )
}

export default Header