import { Grid, Paper, Typography, Box } from '@material-ui/core';
import React from 'react';

import './HomePage.css';

const HomePage = () => {
  return (
    <>
    <Paper elevation={0}>
      <Typography component="div" style={{ backgroundColor: '#C2D3F7', paddingLeft:0 ,paddingTop:5}}>
        <Box
        sx={{
            minHeight: '100%',
            py: 3,
            margin:0
        }}
        >
          <Grid container>
            <Grid item>
              <Typography className='Title' variant='h1' key="State">Bienvenue sur le sauvetage de l'équipe Serval</Typography>
            </Grid>
            <Grid item >
              <img alt=" " className="home__image" src="serval_software.png" style={{ width: 896, height: 399 }}/>
            </Grid>
          </Grid>
          <Grid container direction="column" justifyContent="center">
            <Grid item xs="3">
              <Typography variant='subtitle2'>A l'aide!! L'équipe Serval est parti en mer pour recourir un bateau déchu!!</Typography>
            </Grid>
            <Grid item xs="3">
              <Typography variant='subtitle2'>Partez à la bataille et remporter les mini-jeux pour sauver les marins!!</Typography>
            </Grid>
          </Grid>
        </Box>
      </Typography>
    </Paper>
      
      
    </>
  );
}

export default HomePage;
