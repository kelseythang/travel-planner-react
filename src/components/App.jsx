import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import BrowseDestinations from './BrowseDestinations';
import MyDestinations from './MyDestinations';
import DestinationForm from './DestinationForm';
import '../index.css';


function App() {
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

  // toggles isBookmarked 
  function handleBookmarkChange(id) {
    const updateBookmark = destinations.map(item => {
      if (item.id === id) {
        return {...item, isBookmarked: !item.isBookmarked};
      }
    return item;
    });
    setDestinations(updateBookmark);
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destinations' element={<BrowseDestinations searchValue={searchValue} setSearchValue={setSearchValue} destinations={updatedDestinations} onBookmarkChange={handleBookmarkChange} />} />
        <Route path='/mydestinations' element={<MyDestinations searchValue={searchValue} setSearchValue={setSearchValue} destinations={updatedDestinations} onBookmarkChange={handleBookmarkChange} />} />
        <Route path='/submitnewlocation' element={<DestinationForm />} />
      </Routes>
    </Router>
  )
}

export default App;