import React, { Component } from 'react';

import logo from '../../../playlish_logo.svg';
import './styles.css';

export default class MenuHeader extends Component {
  redirectToHome = () => {
    // redirect to the homepage
    this.props.history.push({
      pathname: '/'
    });
  };

  render() {
    return (
      <div className="MenuHeader-brand" onClick={this.redirectToHome}>
        <img src={logo} alt="logo" />
        <h2>Playlish</h2>
      </div>
    );
  }
}
