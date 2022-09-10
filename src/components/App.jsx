import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import LocationList from './LocationList';
import MyDestinations from './MyDestinations';
import LocationForm from './LocationForm';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/locations' element={<LocationList />} />
        <Route path='/mydestinations' element={<MyDestinations />} />
        <Route path='/submitnewlocation' element={<LocationForm />} />
      </Routes>
    </Router>
  )
}

export default App;