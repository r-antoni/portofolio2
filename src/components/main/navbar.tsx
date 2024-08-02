import Image from 'next/image'
import React from 'react'
import MagicButton from '../ui/magic-button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='absolute flex justify-between items-center top-5 w-full h-16 z-50 px-10'>
        <div>
            <Image src="/logo.png" alt='Portofolio Logo' width={150} height={150} />
        </div>
        <div>
            <Link href="/">
                <MagicButton title='Hire Me' />
            </Link>
        </div>
    </nav>
  )
}

export default Navbar