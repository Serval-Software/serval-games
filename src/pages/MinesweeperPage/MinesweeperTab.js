import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, Box, Tab, Tabs, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Datasweeper from './Datasweeper';

const MinesweeperTab = ({array, state}) => {
    function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box p={3}>
                <Typography component='div' style={{ backgroundColor:'white' }}>{ children }</Typography>
              </Box>
            )}
          </div>
        );
    }
      TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
      };
      
      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
      
      const useStyles = makeStyles(() => ({
        root: {
          flexGrow: 1,
          backgroundColor: 'white',
        },

      }));

      const classes = useStyles();
      const [value, setValue] = React.useState(0);
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };

      return (
          <>
            <Grid className={ classes.root }>
                <AppBar position="static" color="transparent" elevation={1}>
                    <Tabs value={ value } onChange= { handleChange } aria-label="simple tabs example" >
                        <Tab label="Débutant" style={{fontSize:13} }  { ...a11yProps(0) } />
                        <Tab label="Moyen" style={{fontSize:13}}  { ...a11yProps(1) } wrapped={true} />
                        <Tab label="Expert" style={{fontSize:13}}  { ...a11yProps(2) } wrapped={true} />
                    </Tabs>
                </AppBar>
                <Typography className={ "typoGeneral" } component='div' style={{ backgroundColor: '#C2D3F7', minHeight:'90vh' }} >
                  <TabPanel value={ value } index={0}>  
                      <Datasweeper difficulty="beginner"></Datasweeper>
                  </TabPanel>
                  <TabPanel value={ value } index={1}>
                        <Datasweeper difficulty="intermediate"></Datasweeper>
                  </TabPanel>
                  <TabPanel value={ value } index={2}>
                        <Datasweeper difficulty="expert"></Datasweeper>
                  </TabPanel>
                </Typography>
            </Grid>
          </>
      )
}
export default MinesweeperTab;