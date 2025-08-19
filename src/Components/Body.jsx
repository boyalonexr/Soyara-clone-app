import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import BenzImg from '../assets/mini-benz-img.jpg';
import EngineImg from '../assets/mini-engine-img.jpg';
import { FaArrowUp } from "react-icons/fa";
import TireImg from '../assets/mini-tire-img.jpg';

const Body = () => {
  const [ active, setActive ] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [activeCardId, setActiveCardId] = useState(null);

  const brands = ['Chevrolet', 'Jeep', 'Lexus', 'Volkswagen'];
  const types = ['1 Wheel Drive', 'Coupe', 'Hatchback', 'Hybrid', 'Sedan', 'SUV', 'Wagon'];
  const colors = ['Red', 'Black', 'Silver', 'White'];
  const engineData = [
  {
    img: BenzImg,
    title: "interior parts",
    subtitle: "low prices guarantee",
    animation: "left",
    id: 1,
  },
  {
    img: TireImg,
    title: "wheel rim",
    subtitle: "power tools of next level",
    animation: "right",
    id: 2,
  },
  {
    img: EngineImg,
    title: "body parts",
    subtitle: "for any vehicle",
    animation: "left",
    id: 3,
  },
];

const getEngineDataAnimation = (direction) => {
  return {
    hidden: {
      x: direction === "left" ? -100 : 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };
};

  const toggleActive = (type)=> {
    setActive(prev => (prev === type ? false: type))
  }

  useEffect(()=> {
  const handleScroll = () => {
    setShowButton(window.pageYOffset > 300)
  }
  window.addEventListener("scroll", handleScroll)
  return ()=> window.removeEventListener("scroll", handleScroll)
}, [])

const scrollToTop = () => {
   window.scrollTo({
    top: 0,
    behavior: "smooth"
   })
}


  return (
    <main>
      <div className="relative h-[85vh] md:h-[50vh] lg:h-[85vh] bg-img">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

        {/* Content */}
        <div className="relative max-w-screen-xl mx-auto z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find parts for your vehicle</h1>
            <p className="text-xl md:text-2xl mb-5">Over hundreds of brands and thousands of parts</p>
          

          {/* Dropdown inputs */}
          <div className="flex flex-wrap md:flex-nowrap md:h-[25%] mt-4 gap-4 w-3/4 md:w-full max-w-3xl bg-black/50 md:border p-4 items-center shadow-2xl rounded-md">
            {/* Brand */}
            <div 
            onClick={()=> toggleActive('brand')} className="w-full sm:flex-1 relative ">
              <select
                className="p-3 w-full text-zinc-400 rounded bg-white appearance-none pr-10 z-10 selected"
              >
                <option value="" selected disabled>Brand</option>
                {brands.map((brand) => (
                  <option 
                  key={brand} 
                  className="hover:bg-red-500 text-sm"
                  value={brand.toLocaleLowerCase()}
                  >{brand}</option>
                ))}
              </select>

              <div className="pointer-events-none absolute right-4 top-6 transform -translate-y-1/2 text-zinc-500">
                {active === 'brand'  ? '▲' : '▼'}
              </div>
            </div>

            {/* Type */}
            <div
            onClick={()=> toggleActive('type')}
            className="w-full sm:flex-1 relative">
              <select
                className="w-full p-3 text-zinc-400 rounded bg-white appearance-none "
              >
                <option value="" disabled selected>Type</option>
                {types.map((type)=> (
                  <option 
                  key={type}
                  value={type.toLowerCase()}
                  >{type}</option>
                ))}
              </select>

              <div className="pointer-events-none absolute right-4 top-6 transform -translate-y-1/2 text-zinc-500">
               {active === 'type' ? '▲' : '▼'}
              </div>
            </div>

            {/* Color */}
            <div 
            onClick={()=> toggleActive('color')}
            className="w-full sm:flex-1 relative ">
              <select
                className="w-full p-3 text-sm text-zinc-600 bg-white border border-zinc-300 rounded appearance-none" 
              >
                <option value="" disabled selected>Color</option>
               {colors.map((color)=> (
                <option 
                key={color}
                value={color.toLowerCase()}
                >{color}</option>
                ))}
              </select>

              <div className="pointer-events-none absolute right-4 top-6 transform -translate-y-1/2 text-zinc-500">
                {active === 'color' ? '▲' : '▼'}
              </div>
            </div>
            
            <div className="w-full sm:flex-1">
              <button className="w-full text-lg capitalize bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">search</button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 mt-5 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {engineData.map((item) => (  
          <motion.div 
           key={item.id}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: false, amount: 0.5 }}
           variants={getEngineDataAnimation(item.animation)}
           onClick={() =>
              setActiveCardId(prev => (prev === item.id ? null : item.id))
            }
           style={{ backgroundImage: `url(${item.img})` }}
           className="bg-cover bg-center rounded-lg relative flex p-4 h-60 items-center">
             {/* Base gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black to-blue-500/20 rounded-lg" />

              {/* Hover overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-black/90 to-black/20 rounded-lg
                  transition-opacity duration-1000 ease-in-out
                  ${activeCardId === item.id ? 'opacity-100' : 'opacity-0'}
                  md:group-hover:opacity-100`}
                  />

            <div className="relative text-white capitalize flex flex-col flex-wrap justify-between h-11/12 w-11/12 mx-auto">
              <div>
                <p className="text-md mb-6">{item.subtitle}</p>
                <h2 className="text-2xl md:3xl font-bold">{item.title}</h2>
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white text-sm md:text-lg px-4 py-2 w-2/3 rounded-4xl font-medium">
                Shop Now
              </button>
            </div>
        </motion.div>
         ))}
      </div>
      </div>
    
    <AnimatePresence>
      {showButton && (
        <motion.button
          key="scrollToTop"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed bottom-10 right-6 md:right-10 bg-red-600 hover:bg-red-700 p-4 rounded-full shadow-lg text-white z-50"
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
    <div>
      
    </div>
    </main>
  );
};

export default Body;
