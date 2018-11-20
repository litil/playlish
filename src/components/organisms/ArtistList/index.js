import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ArtistRow from '../../molecules/ArtistRow';

import './styles.css';

export default class ArtistList extends Component {
  static propTypes = {
    /** Spotify artists */
    artists: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    /** Function to remove the artist from the selected ones */
    deleteFn: PropTypes.func.isRequired
  };

  render() {
    const { artists } = this.props;

    console.log('props', this.props);

    return (
      <div className="ArtistList-container">
        {artists && artists.length > 0
          ? artists.map((artist, i) => (
              <ArtistRow
                key={`artist-row-${i}`}
                artist={artist}
                deleteFn={() => this.props.deleteFn(artist)}
              />
            ))
          : 'No artist selected yet'}
      </div>
    );
  }
}
