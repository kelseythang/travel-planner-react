import React, {useState, useEffect} from 'react';

function App() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/locations')
      .then(res => res.json())
      .then(data => setLocations(data));
  }, [])

  const test = locations.map(location => {
    return (
      <img key={location.name} src={location.image} />
    )
  })

  return (
    <div>
      <h1>Test</h1>
      {test}
    </div>
  )
}

export default App;