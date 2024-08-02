import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MagicButton from '../ui/magic-button'

const Header = () => {
  return (
    <header className='fixed flex justify-between w-full h-16  top-10 z-50'>
        <Image src="/logo.png" alt='Reindra Antoni Logo' width={150} height={200}/>
        <div>
            <Link href="/">
                <MagicButton title='Hire Me' />
            </Link>
        </div>
    </header>
  )
}

export default Header