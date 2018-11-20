import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import './styles.css';

export default class HeaderUser extends Component {
  static propTypes = {
    /** Spotify connectedUser */
    connectedUser: PropTypes.object.isRequired
  };

  render() {
    const { connectedUser } = this.props;

    return (
      <div className="HeaderUser-container">
        <img
          src={connectedUser.images[0].url}
          alt={connectedUser.display_name}
          data-tip={connectedUser.display_name}
        />
        <ReactTooltip place="bottom" type="light" effect="float" />
      </div>
    );
  }
}
