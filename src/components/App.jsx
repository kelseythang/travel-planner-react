import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import DestinationList from './DestinationList';
import MyDestinations from './MyDestinations';
import LocationForm from './LocationForm';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destinations' element={<DestinationList />} />
        <Route path='/mydestinations' element={<MyDestinations />} />
        <Route path='/submitnewlocation' element={<LocationForm />} />
      </Routes>
    </Router>
  )
}

export default App;