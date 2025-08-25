import bgImage from '../assets/car-interior.jpg';
import carImg from '../assets/about-imgs/about-car.png';
import { useRef, useEffect, useState } from 'react';
import { useInView  } from 'framer-motion';

function About() {
  function Counter({ target, duration, label}) {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const [ count, setCount ] = useState(0)

    useEffect(()=> {
      if (!isInView) return;

      const end = target
      const totalMS = duration * 1000
      const stepTime = 30
      const steps = Math.floor(totalMS / stepTime)
      const increment = Math.ceil(end / steps)

      let current = 0
      const timer = setInterval(()=> {
          current += increment
        if ( current >= end) {
          current = end
          clearInterval(timer)
        }
        setCount(current)
      }, stepTime)

      return () => clearInterval(timer)
    }, [isInView, target, duration])

    return (
      <>
      <span 
        ref={ref}
        className="text-5xl md:text-5xl lg:text-6xl text-zinc-700 block">
          {count.toLocaleString()}
      </span>
      <p className="mt-2 text-base md:text-lg lg:text-xl"> {label}</p>
      </>
    )
  }

  const countData = [
    {target: 102, duratin: 2, label:"Stores Around the World"},
    {target: 2036, duratin: 2, label: "Satisfied Customers"},
    {target: 3012, duratin: 2, label: "Auto Parts"},
    {target: 234, duratin: 3, label: "Awards"},
  ]

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
        <p className='py-2 leading-loose'>We are an awesome team building this amazing React app! 🚀. Our team is focused on crafting a modern, responsive, and user-friendly web experience
        </p>

        <p className='py-2 leading-loose'>From design to deployment, every feature is thoughtfully built with performance, accessibility, and usability in mind.</p>

        <button className="bg-red-600 text-white px-8 py-3 rounded-full w-1/2 my-6 hover:bg-red-700 transition">
          Learn More
        </button>
      </div>

      <div className='mt-10'>
        <img src={carImg} alt="About Car" />
      </div>
    </div>

    <div className="bg-[#f7f5f5] px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
      {countData.map((data, index) => {
        return (
          <div className="text-zinc-500">
            <Counter
              key={index}
              target={data.target}
              duration={data.duratin}
              label={data.label}
            />
         </div>
        )
      })}
    </div>


  </>
  )
}

export default About