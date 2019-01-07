import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PlaylistItem from '../../molecules/PlaylistItem';

import './styles.css';

export default class PlaylistsList extends Component {
  static propTypes = {
    /** The connected user's playlists */
    playlists: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
  };

  render() {
    const { playlists } = this.props;

    if (!playlists || playlists.length < 1) return '';

    return (
      <div className="PlaylistsList-container">
        {playlists.map((p, i) => {
          if (p.tracks.total > 0)
            return <PlaylistItem playlist={p} key={`playlists-${i}`} />;
          else return '';
        })}
      </div>
    );
  }
}
