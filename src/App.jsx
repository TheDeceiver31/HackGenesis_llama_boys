import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Home from './components/Home';
import Signup from './components/Signup';
import About from './components/About'
import Login from './components/Login';

const App = () => {
  return (
<>
<Router>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
<<<<<<< HEAD
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      </Router>
    {/* <Portfolio /> */}
=======
      </Routes>
      </Router>
    <Portfolio />
>>>>>>> 83189138cd60f5f17b55a34af03e27f1733fcf87
    {/* <Footer />   */}
    
   </> 
  )
}

export default App
