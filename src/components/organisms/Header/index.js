import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeaderUser from '../../molecules/HeaderUser';
import HeaderMenu from '../../molecules/HeaderMenu';
import HeaderSocial from '../../molecules/HeaderSocial';

import logo from '../../../playlish_logo.svg';
import './styles.css';

export default class Header extends Component {
  static propTypes = {
    /** Spotify connected user */
    connectedUser: PropTypes.object,
    /** Function to redirect the user to the homepage */
    redirectToHome: PropTypes.func.isRequired
  };

  render() {
    // @see https://simpleicons.org for brand icons
    const { connectedUser, redirectToHome } = this.props;

    return (
      <div className="Header-container">
        <div className="Header-leftContainer">
          <div className="Header-brand" onClick={redirectToHome}>
            <img src={logo} alt="logo" />
            <h2>Playlish</h2>
          </div>
        </div>

        <div className="Header-rightContainer">
          <HeaderMenu />
          {connectedUser ? <HeaderUser connectedUser={connectedUser} /> : ''}
          <HeaderSocial />
        </div>
      </div>
    );
  }
}
