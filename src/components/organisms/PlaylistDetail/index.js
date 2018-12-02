import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TrackRow from '../../molecules/TrackRow';

import './styles.css';

export default class PlaylistDetail extends Component {
  static propTypes = {
    /** The playlist's details */
    playlist: PropTypes.object.isRequired,
    /** The playlist's tracks */
    playlistTracks: PropTypes.array.isRequired
  };

  render() {
    const { playlist, playlistTracks } = this.props;

    if (!playlist) return '';

    const headerTrack = {
      added_at: 'Added',
      track: {
        artists: [{ name: 'Artist' }],
        album: { name: 'Album' },
        popularity: 'Popularity',
        name: 'Title'
      }
    };

    return (
      <div className="PlaylistDetail-container">
        <TrackRow
          track={headerTrack}
          key={`${playlist.name}-track-header`}
          header={true}
        />
        {playlistTracks.map((track, i) => {
          return <TrackRow track={track} key={`${playlist.name}-track-${i}`} />;
        })}
      </div>
    );
  }
}
