import { FaRegUser } from 'react-icons/fa';
import { BsCartPlus } from "react-icons/bs";
import { AnimatePresence } from 'framer-motion';
import { FormCont, CartPopup } from './Form';


const Header = ({ activePopup, setActivePopup }) => {
  const togglePopup = (type)=> {
    setActivePopup(prev => (prev === type ? false: type))
  }

  return (
    <>
    <header className='gap-y-2 flex-wrap p-2 border border-b-zinc-400'>
      <div className='flex justify-between w-11/12 mx-auto'>
      <div className='flex flex-wrap relative'>
      <div className='w-8'>
        <FaRegUser className='text-zinc-400 text-5xl  w-full'/>
      </div>

      <div className='flex flex-col justify-center'>
        <div onClick={()=> togglePopup('login')} className=' text-black leading-5 cursor-pointer pl-3'>
          <p className='text-sm text-zinc-400 font-sm'>Login here</p>
          <h3 className='text-md font-medium'>My Account</h3>
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
        <div onClick={()=> togglePopup('cart')} className='leading-5 cursor-pointer ml-2'> 
          <p className='text-zinc-400 text-sm font-sm'>shopping cart</p>
          <h3 className='text-md font-medium'>$345.56</h3>
        </div>
        </div>

        <AnimatePresence>
        {activePopup === 'cart' && 
          <CartPopup 
            setActivePopup = {setActivePopup}
          />}
      </AnimatePresence>
      </div>
      </div>
    </header>
      {/* <div className='w-11/12 mx-auto p-2'>
          {<Navbar />}
      </div> */}
    </>
  )
}

export default Header
