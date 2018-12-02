import React, { Component } from 'react';

import './styles.css';

export default class SelectedArtist extends Component {
  render() {
    const { artist, last, onClickFn } = this.props;
    const className = last
      ? 'SelectedArtist-container-last'
      : 'SelectedArtist-container';

    console.log(artist);

    if (!artist) return '';

    const artistImg =
      artist.images && artist.images.length > 0 ? (
        <img
          className="SelectedArtist-img"
          src={artist.images[0].url}
          alt={artist.name}
        />
      ) : (
        ''
      );

    return (
      <div className={className} onClick={onClickFn}>
        <div className="SelectedArtist-left">{artistImg}</div>
        <div className="SelectedArtist-right">
          <div className="SelectedArtist-info">
            <h3>{artist.name}</h3>
          </div>
          {artist.tracks
            ? artist.tracks.map((track, i) => {
                return (
                  <div
                    className="SelectedArtist-tracks"
                    key={`selected-artist-tracks-${track.id}`}
                  >
                    {track.name}
                  </div>
                );
              })
            : ''}
        </div>
      </div>
    );
  }
}
