import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import WelcomePage from './components/pages/WelcomePage';
import CreatePlaylistPage from './components/pages/CreatePlaylistPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-container">
              <Switch>
                  <Route exact path='/' component={WelcomePage}></Route>
                  <Route exact path='/create' component={CreatePlaylistPage}></Route>
                </Switch>
          </div>
      </div>
    );
  }
}

export default App;
