import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { FaArrowUp } from "react-icons/fa";
import { engineData } from "./featuredProdConts";

const Body = () => {
  const [ active, setActive ] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [activeCardId, setActiveCardId] = useState(null);

  const brands = ['Chevrolet', 'Jeep', 'Lexus', 'Volkswagen'];
  const types = ['1 Wheel Drive', 'Coupe', 'Hatchback', 'Hybrid', 'Sedan', 'SUV', 'Wagon'];
  const colors = ['Red', 'Black', 'Silver', 'White'];


const getEngineDataAnimation = (direction) => {
  return {
    hidden: {
      x: direction === "left" ? -100 : 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
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
    <main className="overflow-x-hidden">
      <div className="relative h-[90vh] md:h-[58vh] lg:h-[78vh] bg-img">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-5 md:backdrop-blur-none" />

        {/* Content */}
        <div className="relative w-full mx-auto z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <div className="md:h-1/2 lg:w-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">Find parts for your vehicle</h1>
            <p className="text-xl md:text-xl lg:text-3xl  mb-5 lg:font-light">Over hundreds of brands and thousands of parts</p>
          </div>
          

          {/* Dropdown inputs */}
          <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 mt-4 gap-4 w-full max-w-4xl bg-black/50 p-4 items-center shadow-2xl">
            {/* Brand */}
            <div 
            onClick={()=> toggleActive('brand')} 
            className="relative w-3/4 mx-auto md:w-full">
              <select
                name="brand"
                className="p-3 w-full text-zinc-400 bg-white appearance-none pr-10 z-10 "
                defaultValue=""
              >
                <option value="" disabled>Brand</option>
                {brands.map((brand) => (
                  <option 
                  key={brand} 
                  className="hover:bg-red-500 text-sm"
                  value={brand.toLowerCase()}
                  >{brand}</option>
                ))}
              </select>

              <div className="pointer-events-none absolute right-5 top-6 transform -translate-y-1/2 text-zinc-500">
                {active === 'brand'  ? '▲' : '▼'}
              </div>
            </div>

            {/* Type */}
            <div
            onClick={()=> toggleActive('type')}
            className="relative w-3/4 mx-auto md:w-full">
              <select
                name="type"
                className=" p-3 text-zinc-400 bg-white appearance-none w-full"
                defaultValue=""
              >
                <option value="" disabled>Type</option>
                {types.map((type)=> (
                  <option 
                  key={type}
                  value={type.toLowerCase()}
                  >{type}</option>
                ))}
              </select>

              <div className="pointer-events-none absolute right-5 top-6 transform -translate-y-1/2 text-zinc-500">
               {active === 'type' ? '▲' : '▼'}
              </div>
            </div>

            {/* Color */}
            <div 
            onClick={()=> toggleActive('color')}
            className="relative w-3/4 mx-auto md:w-full">
              <select
                name="color"
                className="p-3 text-zinc-400 bg-white appearance-none pr-10 z-10 w-full"
                defaultValue="" 
              >
                <option value="" disabled>Color</option>
               {colors.map((color)=> (
                <option 
                key={color}
                value={color.toLowerCase()}
                >{color}</option>
                ))}
              </select>

              <div className="pointer-events-none absolute right-5 top-6 transform -translate-y-1/2 text-zinc-500">
                {active === 'color' ? '▲' : '▼'}
              </div>
            </div>
            
            <div className="w-3/4 lg:w-11/12 mx-auto">
              <button className=" w-3/4 md:w-full text-lg capitalize bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition">search</button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 my-5 mt-9 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {engineData.map((item) => (  
          <motion.div 
          key={item.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true , amount: 0.7}}
          variants={getEngineDataAnimation(item.animation)}
          onClick={() =>
              setActiveCardId(prev => (prev === item.id ? null : item.id))
            }
           style={{ backgroundImage: `url(${item.img})` }}
           className="bg-cover bg-center rounded-lg relative flex p-4 h-[16rem] items-center">
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
              <button className="bg-red-600 hover:bg-red-700 text-white text-sm md:text-lg p-4 w-2/3 rounded-4xl font-medium">
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
          className="fixed bottom-10 right-6 md:right-10 bg-red-600 hover:bg-red-700 p-4 rounded-full shadow-lg text-white z-30 "
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
