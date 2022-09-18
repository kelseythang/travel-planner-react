import React from 'react'
import headerImg from '../assets/searchcover.jpeg'

function Header({ title, subtitle } ) {
  return (
    <div className='header-container'>
      <div className='header'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <img src={headerImg}></img>
    </div>
  )
}

export default Header;