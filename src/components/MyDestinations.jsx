import React from 'react';
import Destination from './Destination';
import SearchBar from './SearchBar';

function MyDestinations({ searchValue, setSearchValue, destinations, onBookmarkChange  }) {
  const bookmarkedDestinations = destinations.filter(destination => destination.isBookmarked);
  console.log(bookmarkedDestinations)

  return (
    <>
      <SearchBar searchValue={searchValue} onSearchValueChange={setSearchValue} title='SAVED DESTINATIONS' />
      <div className='cards'> 
        {bookmarkedDestinations.map(destination => {
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

export default MyDestinations;