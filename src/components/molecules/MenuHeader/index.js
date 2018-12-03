import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../../../playlish_logo.svg';
import './styles.css';

class MenuHeader extends Component {
  static propTypes = {
    /** Optional styles */
    styles: PropTypes.object
  };

  redirectToHome = () => {
    // redirect to the homepage
    this.props.history.push({
      pathname: '/'
    });
  };

  render() {
    return (
      <div
        className="MenuHeader-brand"
        onClick={this.redirectToHome}
        style={this.props.styles}
      >
        <img src={logo} alt="logo" />
        <h2>Playlish</h2>
      </div>
    );
  }
}

export default withRouter(MenuHeader);
