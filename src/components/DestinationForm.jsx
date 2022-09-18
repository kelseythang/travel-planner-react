import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Header from './Header';

// sets initial state for form
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

function DestinationForm() {
  const [formValues, setFormValues] = useState(initialState);

  const handleInputChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formValues)
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
                value={formValues.name}
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
              value={formValues.location}
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
                value={formValues.description}
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
                value={formValues.type}
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
                value={formValues.website}
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
                value={formValues.image}
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