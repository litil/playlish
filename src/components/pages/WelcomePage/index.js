import React, { Component } from 'react';
import { FaCoffee, FaGithub, FaTwitter } from 'react-icons/fa';
import logo from '../../../playlish_logo.svg';
import { SocialIcon } from '../../elements';
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
      'playlist-read-collaborative',
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
    // return (
    //   <div className="WelcomePage-container">
    //     <div className="WelcomePage-innerContainer">
    //       <div className="WelcomePage-brand">
    // <img src={logo} alt="logo" />
    // <h1>Playlish</h1>
    //       </div>
    //       <div className="WelcomePage-slogan">
    //         <h3>Fastest playlist generator for Spotify</h3>
    //       </div>

    //       <button
    //         className="WelcomePage-login"
    //         onClick={this.redirectToSpotifySignin}
    //       >
    //         Sign in to Spotify
    //       </button>
    //     </div>
    //   </div>
    // );

    return (
      <div class="bg-background-100 text-blue-100 h-screen overflow-hidden font-sans">
        <nav>
          <div class="container mx-auto px-6 py-2 flex justify-between items-center">
            <div className="flex flex-row items-center">
              <img src={logo} alt="logo" class="h-8 w-8 mr-2" />
              <h1 class="font-bold text-2xl lg:text-4xl text-customGreen-100 uppercase">
                Playlish
              </h1>
            </div>
            <ul class="inline-flex mt-2 h-4">
              <li class="ml-3">
                <SocialIcon icon={<FaGithub />} onClickFn={this.linkToGithub} />
              </li>
              <li class="ml-3">
                <SocialIcon
                  icon={<FaTwitter />}
                  onClickFn={this.linkToTwitter}
                />
              </li>
              <li class="ml-3">
                <SocialIcon
                  icon={<FaCoffee />}
                  onClickFn={this.linkToBuyMeACoffee}
                />
              </li>
            </ul>
          </div>
        </nav>

        <div className="container mx-auto h-full flex flex-col justify-center align-items">
          <h2 class="font-bold text-3xl lg:text-5xl text-blue-100 uppercase mb-1">
            Welcome to Playlish
          </h2>
          <h4 class="text-lg lg:text-xl text-blue-100 mb-12">
            Discover the fastest playlist generator for Spotify
          </h4>
          <div className="container">
            <button
              class="bg-transparent hover:bg-customGreen-100 text-blue-100 hover:text-blue-100 font-semibold py-2 px-8 border border-solid border-blue-100 hover:border-transparent uppercase rounded-xl"
              onClick={this.redirectToSpotifySignin}
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    );
  }
}
