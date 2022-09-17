import React, { useEffect }  from 'react'
import SearchBar from './SearchBar';
import Destination from './Destination';

function BrowseDestinations({ searchValue, setSearchValue, destinations, onBookmarkChange }) {
  // // 
  // function handleToggleComplete(id) {
  //     const newState = destinations.map(obj => {
  //       // 👇️ if id equals 2, update country property
  //       if (obj.id === id) {
  //         return {...obj, isBookmarked: !obj.isBookmarked};
          
  //       }
  //       return obj;
  //     })
  //       // 👇️ otherwise return object as is
  //     console.log(newState)
  //     setDestinations(newState);
    
  // }

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