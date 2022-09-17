import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Header from './Header';

function SearchBar({ searchValue, onSearchValueChange, title }) {
  return (
    <div className='search-container'>
      <Header title={title} />
      <form className='search-box'>
        <input type='text' className='search-text' placeholder='Search' onChange={e => onSearchValueChange(e.target.value)} value={searchValue} />
        <SearchIcon />
      </form>
    </div>
  )
}

export default SearchBar;