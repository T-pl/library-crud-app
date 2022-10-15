import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
function AppRoutes() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes >
          <Route path="/" exact element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about" exact element={<About />} />
        </Routes>
        <Routes>
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default AppRoutes
