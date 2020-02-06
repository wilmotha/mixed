import React from 'react';
import NavBar from './elements/navbar';
import RandomName from './pages/randomName';
import { Route, Switch } from 'react-router-dom';

const navLinks = {
    Mix: '/mix',
    Playlists: '/playlists',
    "Name Generator": '/limpBizkit'
};

function App() {
  return (
    <div className="App">
      <NavBar name="mixed" links={navLinks}/>
      <Switch>
        <Route exact path="/">
          <h1> HOME </h1>
        </Route>
        <Route path="/mix">
          <h1> Mix Time </h1>
        </Route>
        <Route path="/playlists">
          <h1> Playlists </h1>
        </Route>
        <Route path="">
          <RandomName/>
        </Route>
        <Route path="*">
          <h1> 404! </h1>
          <h3> You are in the wrong place... </h3>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
