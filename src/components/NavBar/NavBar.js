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
      e.addEventListener('click', preventDefault, false)
      
      //setRandomint(getRandomArbitrary(21));
      setRandomint(1)
      console.log(randomint)
      if(randomint === 1){
        history.push("/pirate");
      }
    
    }

    function preventDefault(e) {
      e.preventDefault();
      alert("Oh non tu t'es fait attaqué par le pirate Ricky Rolly")
    }

    return (
        <AppBar className="navbar" id="navbar">
          <Toolbar  >
            <ListItemLink href="/" className='navbar__links' id="nav-logo" onClick={(e) => handleClick}>
              <img alt=" " src="/serval.png" className="App-logo" id="logo-nav"/>
            </ListItemLink>
            <ListItemLink href="/demineur" className='navbar__links' id="nav-filter" onClick={(e) => handleClick}>
              Démineur
            </ListItemLink>
            <ListItemLink href="/puzzle" className='navbar__links' id="nav-fridge" onClick={(e) => handleClick}>
              Puzzle
            </ListItemLink>
            <ListItemLink href="/shark" className='navbar__links' id="nav-fridge-addition" onClick={(e) => handleClick}>
              Shark Attack
            </ListItemLink>
            <ListItemLink href="/other" className='navbar__links' id="nav-shopping" onClick={ (e) => handleClick}>
              Autre
            </ListItemLink>
            <ListItemLink href="/other" className='navbar__links' id="nav-recipes" onClick={ (e) => handleClick}>
              Autre
            </ListItemLink>
          </Toolbar>
        </AppBar>
    );
}

export default NavBar;

