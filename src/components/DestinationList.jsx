import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Destination from './Destination';
import '../index.css';

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

  return (
    <>
      <SearchBar searchValue={searchValue} onSearchValueChange={setSearchValue} />
      <div className='cards'> 
        {updatedDestinations.map(destination => {
          return (
            <Destination key={destination.name} image={destination.image} name={destination.name} location={destination.location} description={destination.description} />
          )
        })}
      </div>
    </>
  )
}

export default DestinationList;