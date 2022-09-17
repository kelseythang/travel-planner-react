import React from 'react'
import headerImg from '../assets/searchcover.jpeg'

function Header({ title } ) {
  return (
    <>
      <div className='header'>
        <h1>{title}</h1>
        <p>Search by location name, city, or destination type</p>
      </div>
      <img src={headerImg}></img>
    </>
  )
}

export default Header;