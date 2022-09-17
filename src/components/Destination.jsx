import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Destination({ image, name, location, description }) {
  return (
    <div className='card'>
      <div className='card-container-left'>
        <img src={image} />
        <h3><b>{name}</b></h3> 
          <p style={{float: 'left'}}>{location}, Japan</p>
          <div style={{float: 'right'}}>
            <BookmarkBorderIcon />
          </div>
      </div>
    <div className='card-container-right'>
      <div>
        <p>{description}</p>
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