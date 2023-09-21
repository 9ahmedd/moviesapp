import React from 'react'
import './Footer.css'
import {Link, link} from 'react-router-dom'

function Footer() {
  return (
      <div className='foot'>
           &copy;2023
        <Link to="/"><h2>Movies</h2></Link>  
    </div>
  )
}

export default Footer