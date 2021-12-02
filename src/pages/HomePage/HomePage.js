import { Grid, Typography} from '@material-ui/core';
import React from 'react';
import Layout from '../../components/Layout/Layout';

import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <Layout
        page="Home"
        blockBody = {
          <React.Fragment>
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
          </React.Fragment>
        }
         />   
      
    </>
  );
}

export default HomePage;
