import { Grid, Typography } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import Layout from '../../components/Layout/Layout';

import axios from 'axios';

const RescuePage = () => {

  const [yearText, setYearText] = useState({});

  useEffect(() => {

    axios.post("https://localhost:8080/scrap")
    .then((response)=> {
      if(response.data !== null) setYearText(response.data);
    })


  })

  function afficherTexte() {
    return(
      Object.entries(yearText).map(([key, value]) =>{
        Object.entries(value).map(([key_, leTableau]) =>{
          const {year, text} = leTableau;
            return(
              <>
                <Grid item>
                  {
                    year
                  }
                </Grid>
                <Grid item>
                  {
                    text
                  }
                </Grid>
              </>
            )
        })
      })
    )
    
  }


  return (
    <>
      <Layout
          page="Home"
          blockBody = {
            <>
            <Typography variant='h4'>WikiRescue</Typography>
            <Grid container direction="column" alignItems="center">
              {
                afficherTexte()
              }
            </Grid>
            </>
          }
        />
    </>
  );
}

export default RescuePage;
