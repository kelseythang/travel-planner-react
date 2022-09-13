import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  // sets controlled inputs for search field
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log(searchValue);
    setSearchValue('');
  }

  return (
    <div className='search-container'>
      <form className='search-box' onSubmit={handleSubmit}>
        <input type='text' className='search-text' placeholder='Search' onChange={e => setSearchValue(e.target.value)} value={searchValue} />
        <button type='submit' className='search-button'><SearchIcon /></button>
      </form>
    </div>
  )
}

export default SearchBar;