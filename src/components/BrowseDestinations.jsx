import React from 'react'
import SearchBar from './SearchBar';
import Destination from './Destination';

function BrowseDestinations({ searchValue, setSearchValue, updatedDestinations }) {
  return (
    <>
    <SearchBar searchValue={searchValue} onSearchValueChange={setSearchValue} />
    <div className='cards'> 
      {updatedDestinations.map(destination => {
        return (
          <Destination 
            key={destination.name}
            image={destination.image} 
            name={destination.name} 
            location={destination.location} 
            description={destination.description} 
            likes={destination.likes}
            website={destination.website}
            id={destination.id}
            isBookmarked={destination.isBookmarked}
            handleToggleComplete={handleToggleComplete}
          />
        )
      })}
    </div>
  </>
  )
}

export default BrowseDestinations;