import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import WelcomePage from './components/pages/WelcomePage';
import CreatePlaylistPage from './components/pages/CreatePlaylistPage';
import SearchArtistsPage from './components/pages/SearchArtistsPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/search" component={SearchArtistsPage} />
            <Route exact path="/create" component={CreatePlaylistPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
