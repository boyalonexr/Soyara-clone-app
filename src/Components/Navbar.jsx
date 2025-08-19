import { useState } from "react";
import logo from "../assets/sayara-logo.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';


function Navbar({ openNavBar, setOpenNavbar }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleNav = (type)=> {
    setDropdownOpen(prev => (prev === type ? false :type))
  }

  const popupAnimation = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3, ease: 'easeInOut' },
};

  return (
    <div className="sticky top-0 z-30 bg-white p-2 w-full md:p-4 mx-auto shadow-lg">
      <div className="flex items-center justify-between md:w-[85%] mx-auto">
      <div>
        <a href="#">
          <img className="w-36" src={logo} alt="Sayara Logo" />
        </a>
      </div>

      <button onClick={() => setOpenNavbar(true)}>
        <IoReorderThreeOutline className="text-5xl text-zinc-500" />
      </button>
    </div>

    <AnimatePresence>
    {openNavBar && <div className="flex justify-end">
       <div
        onClick={() => setOpenNavbar(false)}
        className="fixed inset-0 bg-black/90 z-30"></div>

      <motion.ul 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 z-50 bg-white shadow-lg w-[80%] max-w-sm h-screen items-center text-zinc-600 capitalize divide-y divide-gray-300">
          <div>
            <img className="w-3/4 p-4 mx-auto" src={logo} alt="Sayara Logo" />
          </div>
          <li className="hover cursor-pointer pad">Home</li>
          <li>
            <div className="flex justify-between items-center  h-10">
              <span className="cursor-pointer flex items-center pl-4 h-full w-full hover ">Shop</span>
              <div  
              onClick={() => toggleNav('shop')}
              className={`flex items-center border-l border-l-gray-300 h-full w-15
              ${dropdownOpen === 'shop' ? 'bg-red-600' : 'bg-white'}
              `}>
              <MdOutlineKeyboardArrowDown className={`text-lg ${dropdownOpen === 'shop' ? 'text-white' : 'text-black'} w-3/4 mx-auto`}/>
              </div>
            </div>

          <AnimatePresence>
            {dropdownOpen === 'shop' && (
              <motion.div
                key='shop-popup'
                {...popupAnimation}
              >
              <ul className="capitalize ml-8 border-t border-gray-300 divide-y divide-gray-300">
                <li className="p-2 hover:bg-gray-200 cursor-pointer">full width</li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer">shop left sidebar</li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer">shop right side bar</li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer">cart</li>
                <li className="p-2 hover:bg-gray-200 cursor-pointer">checkout</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>  
        </li>

        <li className="hover cursor-pointer pad">Blog</li>
        <li className="hover cursor-pointer pad">About Us</li>
        <li className="hover cursor-pointer pad">Contact Us</li>
         <li className="border-b border-gray-300">
          <div className="flex justify-between items-center h-10">
            <span className="cursor-pointer hover pl-4
            w-full h-full flex items-center">Pages</span>
            <div  
            onClick={() => toggleNav('pages')}
            className={`flex items-center border-l border-l-gray-300 h-full w-15
            ${dropdownOpen === 'pages' ? 'bg-red-600' : 'bg-inherit'}
            `}>
            <MdOutlineKeyboardArrowDown className={`text-lg ${dropdownOpen === 'pages' ? 'text-white' : 'text-black'} w-3/4 mx-auto`}/>
            </div>
          </div>

          <AnimatePresence>
          {dropdownOpen === 'pages' && (
            <motion.div
            key={'pages-popup'}
            {...popupAnimation}
            >
            <ul className="capitalize ml-8 border-t border-gray-300 divide-y divide-gray-300">
              <li className="p-2 hover:bg-gray-200 cursor-pointer">account</li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">wishlist</li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">terms and conditions</li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">faq</li>
              <li className="p-2 hover:bg-gray-200 cursor-pointer">404</li>
            </ul>
            </motion.div>
          )}
        </AnimatePresence>
        </li>
      </motion.ul>
      </div>}
    </AnimatePresence>
  </div>
  );
}

export default Navbar;
