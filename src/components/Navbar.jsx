import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    
    <nav className='bg-gray-900 text-white fixed top-0 w-full z-50 shadow-lg'>
      <div className="mycontainer flex justify-between px-4 h-14 items-center py-5">
        <div className="logo font-bold text-white text-2xl">
        <span className='text-[#1dacd6]'></span>
          
          Chandan
          </div>
        {/* <ul>
            <li className='flex gap-4'>
                <a className='hover:font-bold' href='#'>Home</a>
                <a className='hover:font-bold' href='#'>About</a>
                <a className='hover:font-bold' href='#'>Contact</a>
              
            </li>
        </ul> */}
        <div className=''>
        {/* <button type="button" className="text-white my-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Home</button>
        <button type="button" className="text-white my-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Up</button>
        <button type="button" className="text-white my-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">About Us</button> */}
        <button type="button" className="text-white my-1  font-bold rounded-2xl bg-gray-800 text-sm px-3 py-2 text-center me-2 mb-2">Dark</button>


<Link to="/" className="text-white my-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-transform duration-300 hover:scale-105">
            Home
          </Link>
          <Link to="/signup" className="text-white my-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Sign Up
          </Link>
          <Link to="/about" className="text-white my-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            About Us
          </Link>

</div>
      </div>
    </nav>

  )
}

export default Navbar
