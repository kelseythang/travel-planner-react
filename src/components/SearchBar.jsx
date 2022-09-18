import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Header from './Header';

function SearchBar({ searchValue, onSearchValueChange, title, subtitle }) {
  return (
    <div className='header-container'>
      <Header title={title} subtitle={subtitle} />
      <form className='search-box'>
        <input type='text' className='search-text' placeholder='Search' onChange={e => onSearchValueChange(e.target.value)} value={searchValue} />
        <SearchIcon />
      </form>
    </div>
  )
}

export default SearchBar;