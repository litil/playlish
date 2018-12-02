import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { AuthConsumer } from './contexts/AuthContext';

import WelcomePage from './components/pages/WelcomePage';
import CreatePlaylistPage from './components/pages/CreatePlaylistPage';
import SearchArtistsPage from './components/pages/SearchArtistsPage';
import CallbackPage from './components/pages/CallbackPage';
import ListPlaylistsPage from './components/pages/ListPlaylistsPage';
import PlaylistDetailPage from './components/pages/PlaylistDetailPage';
import DefaultLayout from './components/templates/DefaultLayout';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <AuthConsumer>
            {({ user, spotifyApiToken }) => (
              <Switch>
                <Route exact path="/" component={WelcomePage} />
                <Route exact path="/callback" component={CallbackPage} />
                <DefaultLayout
                  exact
                  path="/playlists/"
                  component={ListPlaylistsPage}
                  connectedUser={user}
                  accessToken={spotifyApiToken}
                />
                <DefaultLayout
                  exact
                  path="/playlists/create"
                  component={CreatePlaylistPage}
                  connectedUser={user}
                  accessToken={spotifyApiToken}
                />
                <DefaultLayout
                  exact
                  path="/playlists/:id"
                  component={PlaylistDetailPage}
                  connectedUser={user}
                  accessToken={spotifyApiToken}
                />
                <DefaultLayout
                  exact
                  path="/search"
                  component={SearchArtistsPage}
                  connectedUser={user}
                  accessToken={spotifyApiToken}
                />
              </Switch>
            )}
          </AuthConsumer>
        </div>
      </div>
    );
  }
}

export default App;
