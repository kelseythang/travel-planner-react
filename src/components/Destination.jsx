import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Destination({ image, name, location, description }) {
  return (
    <div className="card">
    <img src={image} style={{width: "100%", height: "50%"}} />
    <div className="container">
      <div className="containerS">
        <div>
        <h3 style={{margin: "5px 0px 2px 0px"}}><b>{name}</b></h3> 
        </div>
        <div>
        <BookmarkBorderIcon />
        </div>
      </div>
      <div>
        <p style={{margin: 0}}>{location}, Japan</p>
        <p>{description}</p>
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
}

export default Destination;