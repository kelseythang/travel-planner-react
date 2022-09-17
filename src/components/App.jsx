import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import MyDestinations from './MyDestinations';
import LocationForm from './LocationForm';
import BrowseDestinations from './BrowseDestinations';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destinations' element={<BrowseDestinations />} />
        <Route path='/mydestinations' element={<MyDestinations />} />
        <Route path='/submitnewlocation' element={<LocationForm />} />
      </Routes>
    </Router>
  )
}

export default App;