import React from 'react';
import { AppBar, Toolbar, ListItem } from '@material-ui/core';


import './NavBar.css';


const NavBar = () => {
    const ListItemLink = (props_) =>  <ListItem button component="a" {...props_} />;
    return (
        <AppBar className="navbar" id="navbar">
          <Toolbar  >
            <ListItemLink href="/" className='navbar__links' id="nav-logo">
              <img alt=" " src="/serval.png" className="App-logo" id="logo-nav"/>
            </ListItemLink>
            <ListItemLink href="/filter" className='navbar__links' id="nav-filter">
              Fruits et Légumes
            </ListItemLink>
            <ListItemLink href="/fridge" className='navbar__links' id="nav-fridge">
              Frigo
            </ListItemLink>
            <ListItemLink href="/fridge/addition" className='navbar__links' id="nav-fridge-addition">
              Ajout au frigo
            </ListItemLink>
            <ListItemLink href="/shopping_list" className='navbar__links' id="nav-shopping">
              Liste des courses
            </ListItemLink>
            <ListItemLink href="/recipes" className='navbar__links' id="nav-recipes">
              Recettes
            </ListItemLink>
          </Toolbar>
        </AppBar>
    );
}

export default NavBar;

