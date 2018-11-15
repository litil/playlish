import React, { Component } from 'react';
import logo from './logo.svg';
import { NavLink, Switch, Route } from 'react-router-dom';

import SigninPage from './components/pages/SigninPage';
import CreatePlaylistPage from './components/pages/CreatePlaylistPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="App-container">
              <Switch>
                  <Route exact path='/' component={SigninPage}></Route>
                  <Route exact path='/create' component={CreatePlaylistPage}></Route>
                </Switch>
          </div>
      </div>
    );
  }
}

export default App;
