import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar'>
      <div>
        <h2 className='logo'>DESTINATION JAPAN</h2>
      </div>
      <nav>
        <NavLink className={({ isActive }) => (isActive ? 'navactive' : '')} to='/'>HOME</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'navactive' : '')} to='/destinations'>DESTINATIONS</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'navactive' : '')} to='/mydestinations'>SAVED DESTINATIONS</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'navactive' : '')} to='/submitnewlocation'>SUBMIT DESTINATION</NavLink>
      </nav>
    </div>
  )
}

export default NavBar;