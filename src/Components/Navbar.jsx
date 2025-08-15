import { FaRegUser } from 'react-icons/fa';
import { BsCartPlus } from "react-icons/bs";
import { useState } from 'react';


const Navbar = () => {
  const [click, setClick] = useState(false)
  
  const handleClick = ()=> {
    setClick(prevClick => !prevClick)
  }


  return (
    <nav className='flex p-4 border border-b-zinc-400'>
      <span>
        <FaRegUser className='text-zinc-400 text-5xl'/>
      </span>

      <div className='capitalize flex flex-col sm:cursor-pointer pl-4'>
        <div onClick={handleClick} className=' text-neutral-700 leading-5'>
          <p className='text-zinc-400 text-shadow-amber-200 font-medium'>Login here</p>
          <h3 className='text-lg font-bold'>my account</h3>
        </div>

        {click && <div style={{ boxShadow: '0 0 20px rgba(0,0,0,0.2)' }}
        className="text-zinc-500 p-5 py-6 w-72 absolute top-23 left-5">
          <h2 className='text-lg text-neutral-700 font-bold pb-3 text-center'>log in to your account</h2>

          <hr />
 
          <form className='font-medium text-zinc-400 mt-3 flex flex-col gap-y-3' action="">
            <label htmlFor="username">Username or email address</label>
            <input className='p-2 pl-4 rounded-3xl border border-zinc-500 text-zinc-900' id='username' type="text" name='username'/>

             <label htmlFor="password">password</label>
            <input  className='p-2 pl-4 rounded-3xl border border-zinc-500 text-zinc-900' id='password' type="text" name='password'/>

            <label className='flex gap-2' htmlFor="checkbox">
              <input className='text-blue-600' type="checkbox" name="checkbox" id="checkbox" />
              remember me
            </label>

            <button className='bg-red-500 text-stone-50 text-lg font-medium p-1 h-13 w-4/6 pt-0 rounded-3xl capitalize'>log in</button>

            <div className='text-red-500'>
              <a href="#">Register</a>
              <span className='px-3 text-zinc-500'>|</span>
              <a href="#">Lost password</a>
            </div>
          </form>
        </div>}
      </div>
      

      <span><BsCartPlus className='text-zinc-400 text-5xl font-thin' /></span>

      <hr />
    </nav>
  )
}

export default Navbar
