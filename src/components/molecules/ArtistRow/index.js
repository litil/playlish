import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class ArtistRow extends Component {
  static propTypes = {
    /** Spotify artist */
    artist: PropTypes.object.isRequired
  };

  render() {
    const { artist } = this.props;

    return (
      <div className="ArtistRow-container">
        <img src={artist.images[0].url} alt={artist.name} />

        <div className="ArtistRow-nameContainer">
          <span>{artist.name}</span>
          {/*}
                <div className="ArtistRow-genreContainer">
                    {artist.genres.map((g, i) => {
                        return <div
                            className="ArtistRow-genre"
                            key={`${artist.id}-genre-${i}`}>
                            { g }
                        </div>
                    })}
                </div>
                */}
        </div>
      </div>
    );
  }
}
