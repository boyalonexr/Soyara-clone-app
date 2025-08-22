import { useState } from 'react'
import { motion } from 'framer-motion'
import shopCart1 from '../assets/shop-imgs/shop-cart1.jpg'
import shopCart2 from '../assets/shop-imgs/shop-cart2.jpg'
import shopCart3 from '../assets/shop-imgs/shop-cart3.jpg'
import shopCart4 from '../assets/shop-imgs/shop-cart4.jpg'
import shopCart5 from '../assets/shop-imgs/shop-cart5.jpg'
import shopCart6 from '../assets/shop-imgs/shop-cart6.jpg'
import shopCart7 from '../assets/featured-imgs/repair-part3.png'
import shopCart8 from '../assets/featured-imgs/repair-part2.jpg'


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
                <div className='w-full md:p-3 h-full flex items-center justify-center'>
                  <img className='w-[150px] lg:w-2/4' src={item.image} alt="shop-cart-imgs" />
                </div>
                <p className={`text-xl font-medium w-full text-center lg:hover:bg-red-600 lg:hover:text-white  p-5 ${isActive ? 'bg-red-600 text-white' : 'bg-gray-200'}`}>
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>

        <button className="mt-6 bg-red-600 hover:bg-red-700 text-white p-4 px-8 md:mt-0 rounded-full self-center md:absolute md:right-4 md:top-0 hidden md:block md:border-y-black">
          Shop Now
        </button>

</div>

  )
}

export default Shop
