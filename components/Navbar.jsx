'use client'
import { useEffect, useState } from 'react'
import NavLinks from './NavLinks'

const Navbar = () => {
  const [textColor, setTextColor] = useState('text-black')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight

      if (scrollPosition > windowHeight * 0.9) {
        setTextColor('text-slate-400')
      } else {
        setTextColor('text-black')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed w-full z-20 flex flex-row justify-between px-5 md:px-20 py-10 duration-300 ${textColor}`}
    >
      <div className='uppercase text-3xl font-bold tracking-wider'>
        gattra's lab
      </div>
      <div className='md:flex hidden'>
        <NavLinks />
      </div>
    </nav>
  )
}
export default Navbar
