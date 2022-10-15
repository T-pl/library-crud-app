import React from 'react'
import '../styles/Footer.css'
import { GitHub } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { Facebook } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { LocalLibrary } from '@mui/icons-material'
import { PhoneAndroid } from '@mui/icons-material';
function Footer() {
  return (
    <footer>
      <div className="leftSide">
        <ul>
          <li className='listFooter'> &copy; 2022</li>
          <li className='listFooter'>Developed by Tiago Ferreira.</li>
          <li className='listFooter'> <LocalLibrary /> Campo Mourão - PR</li>
          <li className='listFooter'> <PhoneAndroid />(44) 9 9764-0013</li>
        </ul>
      </div>
      <div className="rightSide">
        <h2>Follow me:</h2>
        <ul>
          <li className='listFooter'> <GitHub /> Github</li>
          <li className='listFooter'><LinkedIn /> Linkedin</li>
          <li className='listFooter'><Facebook /> Facebook</li>
          <li className='listFooter'><Instagram /> Instagram</li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer
