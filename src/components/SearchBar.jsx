import React from 'react'
import headerImg from '../assets/searchcover.jpeg'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ searchValue, onSearchValueChange }) {
  return (
    <div className='search-container'>
      <img src={headerImg}></img>
      <form className='search-box'>
        <input type='text' className='search-text' placeholder='Search' onChange={e => onSearchValueChange(e.target.value)} value={searchValue} />
        <button type='submit' className='search-button'><SearchIcon /></button>
      </form>
    </div>
  )
}

export default SearchBar;