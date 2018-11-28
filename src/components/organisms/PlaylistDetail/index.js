import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class PlaylistDetail extends Component {
  static propTypes = {
    /** The playlist's details */
    playlist: PropTypes.object.isRequired
  };

  render() {
    const { playlist } = this.props;

    console.log('here', playlist);

    if (!playlist) return '';

    return <div className="PlaylistDetail-container">{playlist.name}</div>;
  }
}
