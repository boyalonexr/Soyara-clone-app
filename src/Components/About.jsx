import bgImage from '../assets/car-interior.jpg';
import carImg from '../assets/about-imgs/about-car.png';
import { useRef, useEffect, useState } from 'react';
import { useInView  } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 
"react-icons/fa6";
import user1 from '../assets/about-imgs/t-1.jpg'
import user2 from '../assets/about-imgs/t-2.jpg'
import user3 from '../assets/about-imgs/t-3.jpg'
import { motion } from 'framer-motion'

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


function About() {
  const [ currentIndex, setCurrentIndex] = useState(0)

  const countData = [
    {target: 102, duratin: 2, label:"Stores Around the World"},
    {target: 2036, duratin: 2, label: "Satisfied Customers"},
    {target: 3012, duratin: 2, label: "Auto Parts"},
    {target: 234, duratin: 3, label: "Awards"},
  ]

const testimonials = [
  {
    name: "John Alex", role: "CEO Meblya", image: user1,
    review:
      "Lorem ipsum dolor sit, amet consectetur elit. Suscipit debitis voluptatum adipisci culpa id vel fugiat officia earum architecto, ipsam unde eius nisi sint sapiente recusandae placeat mollitia quibusdam! Quae.",
  },
  {
    name: "Jessica Moore", role: "CEO Meblya", image: user3,
    review:
      "Lorem ipsum dolor sit, amet consectetur elit. Suscipit debitis voluptatum adipisci culpa id vel fugiat officia earum architecto, ipsam unde eius nisi sint sapiente recusandae placeat mollitia quibusdam! Quae.",
  },
  {
    name: "John Doe", role: "CEO Meblya", image: user2,
    review:
      "Lorem ipsum dolor sit, amet consectetur elit. Suscipit debitis voluptatum adipisci culpa id vel fugiat officia earum architecto, ipsam unde eius nisi sint sapiente recusandae placeat mollitia quibusdam! Quae.",
  },
];

const handleNext = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length )
}

const handlePrev = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length )
}


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
      className='text-black px-6 py-12 md:flex items-center gap-4 lg:gap-12'
     >
      <div className='flex flex-col md:w-11/12 flex-wrap text-zinc-400 lg:w-2/4 lg:p-8'>
        <h1 className='text-4xl text-zinc-600 font-bold pb-2'>About Sayara</h1>
        <p className='py-2 leading-loose lg:leading-normal'>We are an awesome team building this amazing React app! 🚀. Our team is focused on crafting a modern, responsive, and user-friendly web experience
        </p>

        <p className='py-2 leading-loose lg:leading-normal'>From design to deployment, every feature is thoughtfully built with performance, accessibility, and usability in mind.</p>

       <a href="/about">
        <button className="bg-red-600 text-white px-8 py-3 rounded-full w-1/2 my-6 hover:bg-red-700 transition">
          Learn More
        </button>
       </a>

      </div>

      <div className='mt-10'>
        <img src={carImg} alt="About Car" />
      </div>
    </div>

    <div className="bg-[#f7f5f5] px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
      {countData.map((data, index) => {
        return (
          <div 
          key={index}
          className="text-zinc-500">
            <Counter
              target={data.target}
              duration={data.duratin}
              label={data.label}
            />
         </div>
        )
      })}
    </div>

      <div className='text-zinc-400 p-8 my-8 overflow-x-hidden'>
      <h2 className='font-bold text-4xl text-zinc-700 pb-3 text-center'>Testimonials</h2>
      <p className='text-center pb-12'>During our work we have accumulated hundreds of positive reviews</p>

      <div className="overflow-hidden mb-6 md:mb-0 md:w-10/12 lg:w-[60%] mx-auto flex flex-col md:flex-row gap-6">
  {/* IMAGE SECTION (swaps instead of sliding) */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            key={currentIndex} // this forces fade re-render
            className="rounded-lg w-2/3 md:w-full opacity-0 animate-fade-in"
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
          />
        </div>

        {/* TEXT SLIDER SECTION */}
        <div className="w-full md:w-3/4 overflow-hidden">
          <motion.div
            className="flex max-w-full"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(event, info) => {
              const offset = info.offset.x;
              const velocity = info.velocity.x;

              if (offset < -50 || velocity < -500) {
                handleNext();
              } else if (offset > 50 || velocity > 500) {
                handlePrev();
              }
            }}
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{ width: `${testimonials.length * 100}%` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full shrink-0 px-4"
              >
                <p className="tracking-wide">{testimonial.review}</p>
                <div className="w-full flex items-center justify-between md:w-11/12 py-4">
                  <div>
                    <h3 className="font-bold text-lg text-zinc-600">{testimonial.name}</h3>
                    <span>{testimonial.role}</span>
                  </div>
                  <span className="text-yellow-500 text-xl">★ ★ ★ ★ ★</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
</div>

      {/* Controls */}
      <div className="gap-4 flex md:justify-end w-11/12 mt-4 mx-auto md:mx-0 lg:w-2/4 lg:mx-auto">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`border-2 p-3.5 rounded-full transition 
            ${currentIndex === 0 
              ? 'text-zinc-400 border-zinc-300 cursor-not-allowed' 
              : 'text-red-400 hover:bg-red-500 hover:text-white border-red-400'}`}
        >
          <FaArrowLeft className="text-xl" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentIndex === testimonials.length - 1}
          className={`border-2 p-3.5 rounded-full transition 
            ${currentIndex === testimonials.length - 1 
              ? 'text-zinc-400 border-zinc-300 cursor-not-allowed' 
              : 'text-red-400 hover:bg-red-500 hover:text-white border-red-400'}`}
        >
          <FaArrowRight className="text-xl" />
        </button>
      </div>
    </div>

  </>
  )
}

export default About