import React from 'react';
// Router components
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// Custom components
import HomePage from '../pages/HomePage/HomePage';
import NavBar from '../components/NavBar/NavBar';
import RickyRollyPage from '../pages/RickyRollyPage/RickyRollyPage';
import MinesweeperPage from '../pages/MinesweeperPage/MinesweeperPage';
import Footer from '../components/Footer/Footer';
import SharckAttack from '../pages/SharkAttack/SharkAttack';

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
          <Route
            exact
            path='/pirate'
            render={ (props) => <RickyRollyPage {...props}/> }
          />
          <Route
            exact
            path='/minesweeper'
            render={ (props) => <MinesweeperPage {...props}/> }
          />
          <Route
            exact
            path='/shark'
            render={ (props) => <SharckAttack {...props}/> }
          />
        </Switch>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
