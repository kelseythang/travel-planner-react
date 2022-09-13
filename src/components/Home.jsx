import React from 'react';
import homeVideo from '../assets/homevideo.mp4';

function Home() {
  return (
    <div>
      <video src={homeVideo} autoPlay loop muted className='homevideo'></video>
      <div className='home'>
        <h2>A Visual Guide to Japan</h2>
        <h1>FIND YOUR DESTINATION TODAY</h1>
        <button className='buttonhome'>Explore</button>
      </div>
    </div>
  )
}

export default Home;