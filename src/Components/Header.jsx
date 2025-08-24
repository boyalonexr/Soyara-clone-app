import { FaRegUser } from 'react-icons/fa';
import { BsCartPlus } from "react-icons/bs";
import { AnimatePresence } from 'framer-motion';
import { FormCont, CartPopup } from './Form';
import sayaraLogo from "../assets/sayara-logo.png"
import { FaSearch } from "react-icons/fa";


const Header = ({ activePopup, setActivePopup, cartItems, cartTotal, handleRemoveFromCart }) => {
  const togglePopup = (type)=> {
    setActivePopup(prev => (prev === type ? false: type))
  }

  return (
    <>
    <header className='gap-y-2 flex-wrap p-2 md:p-4 border border-b-zinc-400'>
      <div className='flex justify-between  w-11/12 md:w-[85%] mx-auto lg:w-[92%]'>
      
     <div className='hidden lg:block w-[70%]'> 
      <div className=' flex gap-x-6 items-center w-full'>
        <a href="/" className='W-[33%]'>
          <img src={sayaraLogo} alt="" />
        </a>

        <div className='relative text-zinc-500 w-full'>
          <input className='border border-gray-300 focus:outline-none w-full rounded-full pl-6 py-3 p-2' type="text" placeholder='Search' />
          <button className='bg-red-600 rounded-full w-25 py-3.5 px-10 absolute right-1 top-0.5 text-white'><FaSearch /></button>
        </div>
      </div>
     </div> 

    <div className='flex w-full items-center lg:w-[40%] justify-between lg:justify-around lg:ml-8'>
      <div className='flex flex-wrap relative'>
      <div className='w-8'>
        <FaRegUser className='text-zinc-400 text-5xl  w-full'/>
      </div>

      <div className='flex flex-col justify-center'>
        <div onClick={()=> togglePopup('login')} className=' text-black leading-5 cursor-pointer pl-3 md:pl-5'>
          <p className='text-sm md:text-md text-zinc-400 font-sm'>Login here</p>
          <h3 className='text-md md:text-lg text-zinc-800 font-medium'>My Account</h3>
        </div>

      <AnimatePresence>
        {activePopup === 'login' && 
          <FormCont 
            setActivePopup = {setActivePopup}
          />}
      </AnimatePresence>  
      </div>
      </div>
      
      <div className='text-black flex flex-col relative capitalize'> 
        <div className='flex items-center flex-wrap'>
        <div className='w-10'>
          <BsCartPlus className='text-zinc-400 text-5xl w-full' />
        </div>
        <div onClick={()=> togglePopup('cart')} className='leading-5 cursor-pointer pl-2  md:pl-4'> 
          <p className='text-sm md:text-md text-zinc-400 font-sm'>shopping cart</p>
          <h3 className='text-md md:text-lg text-zinc-800 font-medium'>${cartTotal.toFixed(2)}</h3>
        </div>
        </div>

        <AnimatePresence>
        {activePopup === 'cart' && 
          <CartPopup 
            setActivePopup = {setActivePopup}
            cartItems={cartItems}
            cartTotal={cartTotal}
            handleRemoveFromCart={handleRemoveFromCart}
          />}
      </AnimatePresence>
      </div>
     </div> 
      </div>
    </header>

    </>
  )
}

export default Header
