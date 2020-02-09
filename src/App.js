import React from 'react';
import { Route, Switch } from 'react-router-dom';

// elements
import NavBar from './elements/navbar';

// pages
import RandomName from './pages/randomName';
import Mix from './pages/mix';

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
          <Mix />
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
