import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { AppBar, Toolbar, ListItem } from '@material-ui/core';
import { getRandomArbitrary } from '../Random/Random';

import './NavBar.css';


const NavBar = () => {
    
    const [randomint, setRandomint] = useState(0);
    let history = useHistory();
    const ListItemLink = (props_) =>  <ListItem button component="a" {...props_} />;

    function handleClick(){
      let e = document.getElementById("nav-filter");
      
      
      //setRandomint(getRandomArbitrary(21));
      setRandomint(1)
      console.log(randomint)
      if(randomint === 1){
        e.preventDefault();
        history.push("/pirate");
      }
    
    }

    return (
        <AppBar className="navbar" id="navbar">
          <Toolbar  >
            <ListItemLink href="/" className='navbar__links' id="nav-logo" onClick={handleClick}>
              <img alt=" " src="/logo_ocean.png" className="App-logo" id="logo-nav"/>
            </ListItemLink>
            <ListItemLink href="/demineur" className='navbar__links' id="nav-filter" onClick={handleClick}>
              Démineur
            </ListItemLink>
            <ListItemLink href="/puzzle" className='navbar__links' id="nav-fridge" onClick={handleClick}>
              Puzzle
            </ListItemLink>
            <ListItemLink href="/shark" className='navbar__links' id="nav-fridge-addition" onClick={handleClick}>
              Shark Attack
            </ListItemLink>
            <ListItemLink href="/other" className='navbar__links' id="nav-shopping" onClick={ handleClick}>
              Autre
            </ListItemLink>
            <ListItemLink href="/other" className='navbar__links' id="nav-recipes" onClick={ handleClick}>
              Autre
            </ListItemLink>
          </Toolbar>
        </AppBar>
    );
}

export default NavBar;

