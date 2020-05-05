import React, { Component } from 'react';
import { FaSpotify } from 'react-icons/fa';
import './styles.css';

export default class WelcomePage extends Component {
  /**
   * Redirects the user to the Spotify sign in view.
   * The user will be redirected to the /search view afterwards.
   */
  redirectToSpotifySignin = () => {
    const scopesArray = [
      'user-read-private',
      'user-read-email',
      'playlist-read-private',
      'playlist-modify-public',
      'playlist-modify-private',
      'playlist-read-collaborative'
    ];
    const scopes = scopesArray.join(' ');
    const clientId = '341cbbaadca743aba2dd3f99302f623f';
    const responseType = 'token';
    const redirectUri = 'http:%2F%2Flocalhost:3000%2Fcallback';
    const state = '123'; //TODO generate a random string
    window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&state=${state}&scope=${encodeURIComponent(
      scopes
    )}`;
  };

  linkToGithub = () => {
    window.open('https://github.com/litil/playlish');
  };

  linkToTwitter = () => {
    window.open('https://twitter.com/shipasap');
  };

  linkToBuyMeACoffee = () => {
    window.open('https://www.buymeacoffee.com/3z7CnoJ');
  };

  render() {
    return (
      <div className="container mx-auto h-full flex flex-col justify-center align-items">
        <h2 class="font-bold text-3xl lg:text-5xl text-blue-100 uppercase mb-1">
          Welcome to Playlish
        </h2>
        <h4 class="text-lg lg:text-xl text-blue-100 mb-12">
          Discover the fastest playlist generator for Spotify
        </h4>
        <div className="container flex flex-row items-center justify-center">
          <button
            class="bg-transparent hover:bg-green-500 text-blue-100 hover:text-green-100 
              font-semibold py-2 px-8 border border-solid border-blue-100 hover:border-transparent uppercase rounded-xl flex flex-row items-center justify-center"
            onClick={this.redirectToSpotifySignin}
          >
            <FaSpotify />
            <span className="ml-2 text-m">Get started</span>
          </button>
        </div>
      </div>
    );
  }
}
