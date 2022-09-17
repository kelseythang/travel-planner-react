import React, { useState, useEffect } from 'react';
import '../index.css';
import BrowseDestinations from './BrowseDestinations';

function DestinationList() {
  const [destinations, setDestinations] = useState([]); 
  const [searchValue, setSearchValue] = useState('');
  
  // useEffect to fetch destinations
  useEffect(() => {
    fetch('http://localhost:3000/destinations')
      .then(res => res.json())
      .then(data => setDestinations(data));
  }, []);
  
  // filters destination based on search value 
  const filteredDestinations = destinations.filter(destination => {
    const updatedSearchValue = searchValue.toLowerCase();
    return destination.name.toLowerCase().includes(updatedSearchValue) || destination.type.toLowerCase().includes(updatedSearchValue) || destination.location.toLowerCase().includes(updatedSearchValue);
  });
  
  // updates destination based on search value field 
  const updatedDestinations = (searchValue === '') ? destinations : filteredDestinations;

  // 
  function handleToggleComplete(id) {
      const newState = destinations.map(obj => {
        // 👇️ if id equals 2, update country property
        if (obj.id === id) {
          return {...obj, isBookmarked: !obj.isBookmarked};
          
        }
        return obj;
      })
        // 👇️ otherwise return object as is
      console.log(newState)
      setDestinations(newState);
    
  }

  return (
    <>
      <BrowseDestinations searchValue={searchValue} setSearchValue={setSearchValue} updatedDestinations={updatedDestinations} />
 
    </>
  )
}

export default DestinationList;