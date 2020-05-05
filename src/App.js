import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import CallbackPage from './components/pages/CallbackPage';
import CreatePlaylistPage from './components/pages/CreatePlaylistPage';
import ListPlaylistsPage from './components/pages/ListPlaylistsPage';
import PlaylistDetailPage from './components/pages/PlaylistDetailPage';
import WelcomePage from './components/pages/WelcomePage';
import DefaultLayout from './components/templates/DefaultLayout';
import { AuthConsumer } from './contexts/AuthContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <AuthConsumer>
            {({ isConnected, user, spotifyApiToken }) => {
              console.log('context', { user, spotifyApiToken });

              return (
                <Switch>
                  <DefaultLayout exact path="/" component={WelcomePage} isConnected />
                  <DefaultLayout exact path="/callback" component={CallbackPage} isConnected />
                  <DefaultLayout
                    exact
                    path="/playlists/"
                    component={ListPlaylistsPage}
                    connectedUser={user}
                    accessToken={spotifyApiToken}
                    isConnected
                  />
                  <DefaultLayout
                    exact
                    path="/playlists/create"
                    component={CreatePlaylistPage}
                    connectedUser={user}
                    accessToken={spotifyApiToken}
                    isConnected
                  />
                  <DefaultLayout
                    exact
                    path="/playlists/:id"
                    component={PlaylistDetailPage}
                    connectedUser={user}
                    accessToken={spotifyApiToken}
                    isConnected
                  />
                </Switch>
              );
            }}
          </AuthConsumer>
        </div>
      </div>
    );
  }
}

export default App;
