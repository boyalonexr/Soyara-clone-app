import logo from "../assets/sayara-logo.png"
import { IoReorderThreeOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="border border-b-zinc-400 flex items-center justify-between py-2 px-6">
      <div>
        <a href="#">
        <img className="w-1/2" src={logo} alt="" />
        </a>
      </div>
      <button onClick={()=> console.log('clicked')}>
        <IoReorderThreeOutline className="text-6xl text-zinc-500" />
      </button>
    </div>
  )
}

export default Navbar
