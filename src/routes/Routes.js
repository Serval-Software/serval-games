import React from 'react';
// Router components
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// Custom components
import HomePage from '../pages/HomePage/HomePage';
import NavBar from '../components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path='/'
            render={ (props) => <HomePage {...props}/> }
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
