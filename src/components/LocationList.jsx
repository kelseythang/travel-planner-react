import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

import '../index.css';

function LocationList() {
  const [locations, setLocations] = useState([]); 

  useEffect(() => {
    fetch('http://localhost:3000/locations')
      .then(res => res.json())
      .then(data => setLocations(data));
  }, []);


  const test = locations.map(location => {
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
            <p style={{margin: 0}}>{location.location}</p>
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
      <SearchBar />
      <div className="cards">
      {test}
      </div>
    </>
  )
}

export default LocationList;