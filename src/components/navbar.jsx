import { Link } from "react-router-dom"

const Navbar = () => {
  return(
    <div className="w-full h-[100px] bg-gray-700 flex justify-center items-center">
      <div className="flex gap-5">
        <Link className="text-white text-xl" to="/">Home</Link>
        <Link className="text-white text-xl" to="/login">Login</Link>
        <Link className="text-white text-xl" to="/Profile">Profile</Link>
      </div>
    </div>
    
  )
}

export default Navbar