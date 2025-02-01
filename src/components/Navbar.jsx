// import React from 'react'
// import { Link } from 'react-router-dom';


// const Navbar = () => {
//   return (
    
//     <nav className='bg-gray-900 text-white fixed top-0 w-full z-50 shadow-lg'>
//       <div className="mycontainer flex justify-between px-4 h-14 items-center py-5">
//         <div className="logo font-bold text-white text-2xl">
//         <span className='text-[#1dacd6]'></span>
          
//           Chandan
//           </div>
        
//         <div className=''>
//                <button type="button" className="text-white my-1  font-bold rounded-2xl bg-gray-800 text-sm px-3 py-2 text-center me-2 mb-2">Dark</button>


// <Link to="/" className="text-white my-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 transition-transform duration-300 hover:scale-105">
//             Home
//           </Link>
//           <Link to="/signup" className="text-white my-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
//             Sign Up
//           </Link>
//           <Link to="/about" className="text-white my-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
//             About Us
//           </Link>

// </div>
//       </div>
//     </nav>

//   )
// }

// export default Navbar


// import React from 'react'
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className='fixed  top-0 w-full z-50 shadow-lg bg-gray-900 bg-opacity-20 backdrop-blur-md backdrop-saturate-150 border border-gray-700'>
//       <div className="mycontainer flex justify-between px-4 h-14 items-center py-5">
//         <div className="logo font-bold text-white text-2xl">
//           <span className='text-[#1dacd6]'></span>
//           Chandan
//         </div>

//         <div className='flex items-center space-x-4'>
//           <button type="button" className="text-white font-bold rounded-2xl bg-gray-800 bg-opacity-50 px-3 py-2 text-sm text-center transition-transform duration-300 hover:scale-105">
//             Dark
//           </button>

//           <Link to="/" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center transition-transform duration-300 hover:scale-105">
//             Home
//           </Link>

//           <Link to="/signup" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center transition-transform duration-300 hover:scale-105">
//             Sign Up
//           </Link>

//           <Link to="/about" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center transition-transform duration-300 hover:scale-105">
//             About Us
//           </Link>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo"></div>

        <div className="nav-links">
          <button type="button" className="dark-mode-btn">Dark</button>

          <Link to="/">Home</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/about">About Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
