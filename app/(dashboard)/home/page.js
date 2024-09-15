import Navbar from '@/components/Navbar'
import { Suspense } from 'react'

const home = () => {
  return (
    <div>
      <section className='relative w-full h-screen'>
        <Suspense fallback={<p>Loading video...</p>}>
          <video
            className='h-screen w-full opacity-60 object-cover'
            autoPlay
            loop
            muted
            playsInline
          >
            <source src='/video/fullscan.mp4' type='video/mp4' />
            Your browser does not support the video tag
          </video>
          {/* <div className='z-20 text-6xl absolute top-0 left-0'>adwad</div> */}
        </Suspense>
      </section>
      <section className='h-screen w-full flex items-center justify-center bg-black'>
        <h1 className='text-white z-20 text-center text-6xl tracking-wide uppercase'>
          Quotes about life. <br />
          Quote about Life.
        </h1>
      </section>
      <section className='h-screen w-full flex items-center justify-center bg-grey-200'>
        <h1 className='text-black z-20 text-center text-6xl tracking-wide uppercase'>
          Quotes about life. <br />
          Quote about Life.
        </h1>
      </section>
    </div>
  )
}
export default home
