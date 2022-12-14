import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function Destination({ image, name, location, description, likes, website, id, isBookmarked, onBookmarkChange }) {
  return (
    <div className='card'>
      <div className='card-container-left'>
        <img src={image} />
        <h3><b>{name}</b></h3> 
        <p>{location}, Japan</p>
      </div>
      <div className='card-container-right'>
        <div>
          <p>{description}</p>
       </div>
        <div className='card-container-right-bottom'>
         <p>{likes} </p>
         <ThumbUpIcon />
         <p style={{fontWeight: '100'}}>|</p>
         <p>{!isBookmarked ? 'Bookmark' : 'Remove Bookmark'} </p>
         {
          !isBookmarked ? 
          <BookmarkBorderIcon onClick={() => onBookmarkChange(id)} /> :
          <BookmarkIcon onClick={() => onBookmarkChange(id)} />
         }
         <p style={{fontWeight: '100'}}>|</p>
         <button className='button' onClick={() => window.open(website, '_blank', 'noopener,noreferrer')}>Website</button>
       </div>
      </div>
    </div> 
  )
}

export default Destination;