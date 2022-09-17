import React from 'react';
import { useNavigate } from "react-router-dom";
import homeVideo from '../assets/homevideo.mp4';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <video src={homeVideo} autoPlay loop muted className='homevideo'></video>
      <div className='home'>
        <h2>A Visual Guide to Japan</h2>
        <h1>FIND YOUR DESTINATION TODAY</h1>
        <button className='button' onClick={() => navigate('/destinations')}>Explore</button>
      </div>
    </div>
  )
}

export default Home;