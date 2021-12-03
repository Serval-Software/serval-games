import { Typography } from '@material-ui/core';
import React from 'react';
import Layout from '../../components/Layout/Layout';

const RescuePage = () => {
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

export default RescuePage;
