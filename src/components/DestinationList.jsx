import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import '../index.css';

function DestinationList() {
  const [locations, setLocations] = useState([]); 
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/destinations')
      .then(res => res.json())
      .then(data => setLocations(data));
  }, []);
  

  const filteredDestinations = locations.filter(location => {
    const updatedSearchValue = searchValue.toLowerCase();
    return location.name.toLowerCase().includes(updatedSearchValue) || location.type.toLowerCase().includes(updatedSearchValue) || location.location.toLowerCase().includes(updatedSearchValue);
  });

  const test2 = searchValue === '' ? locations : filteredDestinations;

  const test = test2.map(location => {
    return (
      <div key={location.name} className="card">
        <img src={location.image} style={{width: "100%", height: "50%"}} />
        <div className="container">
          <div className="containerS">
            <div>
            <h3 style={{margin: "5px 0px 2px 0px"}}><b>{location.name}</b></h3> 
            </div>
            <div>
            <BookmarkBorderIcon />
            </div>
          </div>
          <div>
            <p style={{margin: 0}}>{location.location}, Japan</p>
            <p>{location.description}</p>
          </div>
        </div>
        <div className="containerSS">
          <div>
            <p> <ThumbUpIcon fontSize='inherit'/>  3291</p>
          </div>
          <div>
            <button className="buttonhome">View More</button>
          </div>
        </div>
      </div> 
    )
  })

  return (
    <>
      <SearchBar locations={locations} onSearchDestinations={setLocations} searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="cards">
      {test}
      </div>
    </>
  )
}

export default DestinationList;