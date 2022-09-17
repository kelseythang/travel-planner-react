import React, { useEffect }  from 'react'
import SearchBar from './SearchBar';
import Destination from './Destination';

function BrowseDestinations({ searchValue, setSearchValue, destinations, onBookmarkChange }) {

  return (
    <>
      <SearchBar searchValue={searchValue} onSearchValueChange={setSearchValue} />
      <div className='cards'> 
        {destinations.map(destination => {
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
              onBookmarkChange={onBookmarkChange}
            />
          )
        })}
      </div>
    </>
  )
}

export default BrowseDestinations;