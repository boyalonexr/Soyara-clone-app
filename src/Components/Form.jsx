import { motion } from 'framer-motion';
import { RiDeleteBin6Line } from "react-icons/ri";

const popupAnimation = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.2, ease: 'easeInOut' },
};

export const FormCont = (props) => {
  return (
    <>
    <div
      onClick={() => props.setActivePopup(false)}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"></div>

    <motion.div
      key="login-popup"
      {...popupAnimation}
      style={{ boxShadow: '0 0 20px rgba(0,0,0,0.3)' }}
      className="text-zinc-500 p-5 py-6 w-72 absolute top-18 left-0  z-50 lg:z-50 bg-white capitalize"
    >
      <h2 className="text-lg text-neutral-700 font-bold pb-3 text-center">
        log in to your account
      </h2>
      <hr />
      <form name='Login-Form' className="font-medium text-zinc-400 mt-3 flex flex-wrap flex-col gap-y-3" action="">
        <label htmlFor="username">Username or email address</label>
        <input
          className="p-2 pl-4 rounded-3xl border border-zinc-500 text-black"
          id="username"
          type="text"
          name="username"
        />

        <label htmlFor="password">password</label>
        <input
          className="p-2 pl-4 rounded-3xl border border-zinc-500 text-black"
          id="password"
          type="password"
          name="password"
        />

        <label className="flex gap-2" htmlFor="checkbox">
          <input className="text-blue-600" type="checkbox" name="checkbox" id="checkbox" />
          remember me
        </label>

        <button className="bg-red-500 text-stone-50 text-lg font-medium p-1 h-13 w-4/6 pt-0 rounded-3xl capitalize">
          log in
        </button>

        <div className="text-red-500">
          <a href="#">Register</a>
          <span className="px-3 text-zinc-500">|</span>
          <a href="#">Lost password</a>
        </div>
      </form>
    </motion.div>
    </>
  );
};

export const CartPopup = ({ setActivePopup, cartItems, cartTotal, handleRemoveFromCart}) => {

  return (
    <>
    <div
      onClick={() => setActivePopup(false)}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50
      lg:z-50"/>

    <motion.div
      key="cart-popup"
      {...popupAnimation}
      style={{ boxShadow: '0 0 20px rgba(0,0,0,0.3)' }}
      className="p-5 py-6 w-85 absolute z-50 top-18 right-0 bg-white text-zinc-400"
    >
      {cartItems.length === 0 ? (
        <p className='text-center py-6 text-zinc-500'>No items in Cart</p>
      ) : (
        cartItems.map((item, index)=> (
           <div 
           key={index}
           className="pb-4">
              <a className="flex text-zinc-500 justify-between items-center" href="#">
                <img className="border border-zinc-200 w-1/4" src={item.image} alt={item.name} />
                <p className="px-4">
                  {item.name} <br />
                  <span className='text-black'>
                    {item.quantity} 
                  </span>{" "}x
                   ${item.price}
                </p>
                <button 
                onClick={()=> handleRemoveFromCart(item.id)}
                className="w-10 flex justify-center items-center pt-4">
                  <RiDeleteBin6Line className="text-2xl" />
                </button>
              </a>
            </div>
        ))
      )}
     
      <hr />
      <div className="flex flex-col">
        <div className="flex items-center justify-between text-black w-full mt-2">
          <h3>subtotal:</h3>
          <p className="text-lg">${cartTotal.toFixed(2)}</p>
        </div>
        <div className="flex gap-4 pt-5">
          <button className="text-md capitalize flex-1 text-white p-2 bg-red-500 rounded-sm">
            view cart
          </button>
          <button className="text-md capitalize flex-1 bg-red-500 text-white rounded-sm p-2">
            checkout
          </button>
        </div>
      </div>
    </motion.div>
  </>
  );
};
