import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { formatDistance } from 'date-fns/esm';

import './styles.css';

export default class TrackRow extends Component {
  static propTypes = {
    /** The track's details */
    track: PropTypes.object.isRequired,
    /** Is it the header row */
    header: PropTypes.bool
  };
  static defaultProps = {
    header: false
  };

  render() {
    const { track, header } = this.props;
    const trackDetail = track.track;

    if (!track) return '';

    const artist = trackDetail.artists
      ? trackDetail.artists.map(i => i.name).join(', ')
      : 'Unknown';
    const album = trackDetail.album ? trackDetail.album.name : 'Unknown';

    const dateNow = new Date();
    const dateValue =
      track.added_at === 'Added'
        ? 'Added'
        : formatDistance(track.added_at, dateNow);

    const containerClassName = header
      ? 'TrackRow-container header'
      : 'TrackRow-container';

    return (
      <div className={containerClassName}>
        <span className="TrackRow-title truncate">{trackDetail.name}</span>
        <span className="TrackRow-artist truncate">{artist}</span>
        <span className="TrackRow-album truncate">{album}</span>
        <span className="TrackRow-date">{dateValue}</span>
        <span className="TrackRow-popularity">{trackDetail.popularity}</span>
      </div>
    );
  }
}
