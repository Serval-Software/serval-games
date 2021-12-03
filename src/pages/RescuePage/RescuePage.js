import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import Layout from '../../components/Layout/Layout';

const SauveteurPage = () => {
  return (
    <>
      <Layout
          page="Home"
          blockBody = {
            <Typography variant='h4'>WikiRescue</Typography>
          }
        />
    </>
  );
}

export default SauveteurPage;
