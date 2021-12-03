import { Grid, Typography, Link } from '@material-ui/core';
import React from 'react';

import './HomePage.css';
import Layout from '../../components/Layout/Layout';

const HomePage = () => {
  return (
    <>
      <Layout
          page="Home"
          blockBody = {
            <>
              <Grid container spacing="2" className="grid_home">
                <Grid item xs="4">
                  <Link href="/pirate" >
                    <img alt=" " className="home__image" src="serval_software.png"/>
                  </Link>
                </Grid>
                <Grid item xs="7">
                  <Typography className='Title' variant='h2' key="State">Bienvenue sur le sauvetage de l'équipe Serval</Typography>
                </Grid>
              </Grid>
              <Grid container direction="column" justifyContent="center">
                <Grid item>
                  <Typography variant='subtitle'>A l'aide !! L'équipe Serval est partie en mer pour secourir un bateau déchu !!</Typography>
                </Grid>
                <Grid item>
                  <Typography variant='subtitle'>Partez à la bataille et remportez les mini-jeux pour sauver les marins !!</Typography>
                </Grid>
              </Grid>
            </>
          }
        />
    </>
  );
}

export default HomePage;
