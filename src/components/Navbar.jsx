import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <header>
      <h1>Papiro Book Store</h1>
      <nav>
        <ul>
          <li className='listNavbar'>
            <Link to="/" style={{ textDecoration: 'none', color: "#fff" }}>
              Home
            </Link>
          </li>
          <li className='listNavbar'>
            <Link to="/about" style={{ textDecoration: 'none', color: "#fff" }}>
              About
            </Link>
          </li>
          <li className='listNavbar'>
            <Link to="/contact" style={{ textDecoration: 'none', color: "#fff" }}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
