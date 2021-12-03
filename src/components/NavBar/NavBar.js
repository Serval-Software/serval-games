import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, ListItem } from '@material-ui/core';
import { getRandomArbitrary } from '../Random/Random';

import './NavBar.css';


const NavBar = () => {
    
 

    const [randomint, setRandomint] = useState(0);
    const ListItemLink = (props_) =>  <ListItem button component="a" {...props_} />;

    useEffect(() => {
      setRandomint(getRandomArbitrary(10));
  
    }, []);

    return (
        <AppBar className="navbar" id="navbar">
          <Toolbar  >
            <ListItemLink href={`${randomint === 4 ? '/pirate': '/' }`}  className='navbar__links' id="nav-logo" >
              <img alt=" " src="/logo_ocean.png" className="App-logo" id="logo-nav"/>
            </ListItemLink>
            <ListItemLink href={`${randomint === 4 ? '/pirate': '/minesweeper' }`} className='navbar__links' id="nav-filter" >
              Démineur
            </ListItemLink>
            <ListItemLink href={`${randomint === 4 ? '/pirate': '/shark' }`} className='navbar__links' id="nav-fridge" >
              Shark Attack
            </ListItemLink>
            <ListItemLink href={`${randomint === 4 ? '/pirate': '/watersave' }`} className='navbar__links' id="nav-fridge-addition" >
              Sauveteur en Mer !
            </ListItemLink>
          </Toolbar>
        </AppBar>
    );
}

export default NavBar;

