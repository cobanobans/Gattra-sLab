import Image from 'next/image'
import Link from 'next/link'

export default function Intro() {
  return (
    <div className='opacity-80 h-screen w-screen flex items-center justify-center'>
      <Image
        src='/image/background.jpg'
        className='object-cover'
        fill
        alt='Picture of the author'
      />
      <div className='z-20 flex flex-col gap-20 items-center'>
        <div className='md:text-8xl text-6xl text-white font-sans uppercase flex flex-col items-end font-extrabold tracking-wider'>
          <h1>Gattra's</h1>
          <h1>Lab</h1>
        </div>
        <div className='z-20 w-fit'>
          <Link
            href='/home'
            className='border-2 px-5 py-2 text-white text-xl hover:bg-white hover:text-black duration-300 uppercase'
          >
            Enter
          </Link>
        </div>
      </div>
    </div>
  )
}
