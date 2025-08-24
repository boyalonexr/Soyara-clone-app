import bgImage from '../assets/car-interior.jpg';
import carImg from '../assets/about-imgs/about-car.png';
import { useEffect, useState } from 'react';
import AboutCount from './AboutCount'
import { InView, useInView  } from 'react-intersection-observer';

function About() {
  const [ count, setCount ] = useState(1)
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })



  return (
    <>
      <div 
         style={{ backgroundImage: `url(${bgImage})` }}
         className='relative flex  flex-col justify-center items-center h-45 md:h-80 bg-cover bg-center'>
          <div className='absolute inset-0 bg-black/80 z-10 pointer-events-none' />

          <span className='relative z-10 font-bold text-white text-3xl md:text-5xl md:mb-4'>
            About Us
          </span>

         <div className='hidden md:block relative z-10'>
          <a href="/" className='text-red-500'>
             Home <span className="ml-1 text-white">&gt;&gt;</span>
          </a>
          <span className='pl-2'>About us</span>
         </div>
    </div>

     <div 
      className='text-black px-6 py-12 md:flex gap-4'
     >
      <div className='flex flex-col md:w-11/12 flex-wrap text-zinc-400'>
        <h1 className='text-4xl text-zinc-600 font-bold pb-2'>About Sayara</h1>
        <p className='py-2'>We are an awesome team building this amazing React app! 🚀. Our team is focused on crafting a modern, responsive, and user-friendly web experience
        </p>

        <p className='py-2'>From design to deployment, every feature is thoughtfully built with performance, accessibility, and usability in mind.</p>

        <button className="bg-red-600 text-white px-8 py-3 rounded-full w-1/2 my-6 hover:bg-red-700 transition">
          Learn More
        </button>
      </div>

      <div>
        <img src={carImg} alt="About Car" />
      </div>
    </div>

    <div 
      ref={ref}
      className="bg-[#f7f5f5] px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
      
      <div className="text-zinc-500">
        <AboutCount >100</AboutCount>
        <p className="mt-2 text-base md:text-lg lg:text-xl">Stores Around the World</p>
      </div>

      <div className="text-zinc-500">
        <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-700 block">
           <AboutCount>256</AboutCount>
          {/* 2,036 increment */}
        </span>
        <p className="mt-2 text-base md:text-lg lg:text-xl">Satisfied Customers</p>
      </div>

      <div className="text-zinc-500">
        <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-700 block">
          {/* 3,012 increment */}
        </span>
        <p className="mt-2 text-base md:text-lg lg:text-xl">Auto Parts</p>
      </div>

      <div className="text-zinc-500">
        <span className="text-4xl md:text-5xl lg:text-6xl font-semibold text-zinc-700 block">
          {/* 234 increment */}
        </span>
        <p className="mt-2 text-base md:text-lg lg:text-xl">Awards</p>
      </div>

    </div>


  </>
  )
}

export default About