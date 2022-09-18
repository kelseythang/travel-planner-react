import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Header from './Header';

function DestinationForm({ onAddDestination }) {
  // sets initial data for form
  const initialState = {
    name: '',
    image: '',
    description: '',
    location: '',
    type: '',
    likes: 0,
    website: '',
    isBookmarked: false
  }

  // sets state to have controlled inputs
  const [formData, setFormValues] = useState(initialState);

  // handles state change
  const handleInputChange = e => {
    setFormValues({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 
  // handles submission of form
  const handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:3000/destinations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      // updates destination state
      .then(data => onAddDestination(data));
    
    // clears form inputs after form submit
    setFormValues(initialState);
  }

  return (
    <>
      <Header title='SUBMIT A NEW LOCATION' subtitle='Send a Destination to Add to Our Database' />
        <Box component='form' className='form-box' onSubmit={handleSubmit} sx={{ flexGrow: 1 }}>
          <h2>Destination Details</h2>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id='outlined-required'
                label='Destination Name'
                InputLabelProps={{ shrink: true }}
                fullWidth
                name='name'
                value={formData.name}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
              id='outlined-required'
              label='Destination City Name'
              InputLabelProps={{ shrink: true }}
              fullWidth
              name='location'
              value={formData.location}
              onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id='outlined-multiline-static'
                label='Destination Description'
                InputLabelProps={{ shrink: true }}
                multiline
                rows={4}
                fullWidth
                name='description'
                value={formData.description}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id='outlined-required'
                label='Destination Type'
                InputLabelProps={{ shrink: true }}
                helperText="Example: garden, castle, shrine"
                fullWidth
                name='type'
                value={formData.type}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id='outlined-required'
                label='Destination Website'
                InputLabelProps={{ shrink: true }}
                fullWidth
                name='website'
                value={formData.website}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id='outlined-required'
                label='Destination Image URL'
                InputLabelProps={{ shrink: true }}
                fullWidth
                name='image'
                value={formData.image}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <button className='button'>Submit</button>
        </Box>
    </>
  )
}

export default DestinationForm;