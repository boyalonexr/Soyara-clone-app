import { useState } from 'react'
import { motion } from 'framer-motion'
import shopCart1 from '../assets/shop-imgs/shop-cart1.jpg'
import shopCart2 from '../assets/shop-imgs/shop-cart2.jpg'
import shopCart3 from '../assets/shop-imgs/shop-cart3.jpg'
import shopCart4 from '../assets/shop-imgs/shop-cart4.jpg'
import shopCart5 from '../assets/shop-imgs/shop-cart5.jpg'
import shopCart6 from '../assets/shop-imgs/shop-cart6.jpg'
import shopCart7 from '../assets/featured-imgs/Repair-Part1.jpg'
import shopCart8 from '../assets/featured-imgs/Repair-Part2.jpg'


function Shop() {
  const [ activeCardId, setActiveCardId ] = useState(false)

  const shopCategories = [
  { id: 1, name: "Body parts", image: shopCart1 },
  { id: 2, name: "tools & garage", image: shopCart2 },
  { id: 3, name: "headlights & lighting", image: shopCart3 },
  { id: 4, name: "interior", image: shopCart4 },
  { id: 5, name: "brakes & suspension", image: shopCart5 },
  { id: 6, name: "engine", image: shopCart7 },
  { id: 7, name: "drivetrain", image: shopCart8 },
  { id: 8, name: "engine  drivetrain", image: shopCart6 },
];



  return (
    <div className='flex flex-col p-2 px-4 mb-8 text-zinc-600 md:relative'>
      <h2 className='text-2xl font-medium mb-7 md:mb-12'>Shop by Category</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full text-zinc-600">
          {shopCategories.map(item => {
            const isActive = activeCardId === item.id;

            return (
              <div 
                key={item.id}
                onClick={() => setActiveCardId(prev => prev === item.id ? null : item.id)}
                className={`flex flex-col items-center justify-between border gap-2 capitalize mb-4 h-70 lg:hover:border-red-600 rounded-md ${isActive ? 'border-red-600' : 'border-gray-300'}`}
              >
                <div className='w-full h-full flex items-center justify-center'>
                  <img className='w-1/2 md:w-1/4' src={item.image} alt="shop-cart-imgs" />
                </div>
                <p className={`text-xl font-medium w-full text-center lg:hover:bg-red-600 lg:hover:text-white  p-5 ${isActive ? 'bg-red-600 text-white' : 'bg-gray-200'}`}>
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>

        <button className="mt-6 bg-red-600 hover:bg-red-700 text-white p-4 px-8 md:mt-0 rounded-full self-center md:absolute md:right-4 md:top-0 hidden md:border-y-black">
          Shop Now
        </button>

       <motion.div  
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true }}
        className=" bg-shop bg-cover bg-center py-10 px-8 mt-8 relative rounded-lg w-full">
          <div className='absolute rounded-lg inset-0 bg-black/50 z-0 pointer-events-none' />

          <div className='relative capitalize z-10 text-white'>
          <div className='pb-4'>
            <h2 className='text-2xl font-bold'>wheels rim</h2>
            <p className='text-md'>low prices, price match guarantee</p>
          </div>

          <ul className='py-4'>
            <li className='py-2 hover:text-red-600'>headlights & lighting</li>
            <li className='py-2 hover:text-red-600'>brakes & suspension</li>
            <li className='py-2 hover:text-red-600'>interior parts</li>
            <li className='py-2 hover:text-red-600'>engine & drivetrain</li>
            <li className='py-2 hover:text-red-600'>tools & garage</li>
          </ul>

          <button className="mt-4 bg-red-600 hover:bg-red-700 text-white w-3/4 p-4 self-start rounded-full">Shop Now</button>
          </div>
    </motion.div>
</div>

  )
}

export default Shop
