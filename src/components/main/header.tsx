import Image from 'next/image'
import React from 'react'
import MagicButton from '../ui/magic-button'
import Link from 'next/link'

const Header = () => {
  return (
    <nav className='absolute flex justify-between items-center top-5 w-full h-16 z-50 md:px-10 pr-5'>
        <Image src="/logo.png" alt='Portofolio Logo' width={130} height={130} />
        <div className='xl:pr-10'>
            <Link href="/">
                <MagicButton title='Hire Me' />
            </Link>
        </div>
    </nav>
  )
}

export default Header