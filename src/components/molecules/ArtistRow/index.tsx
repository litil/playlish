import React, { FunctionComponent } from 'react';
import './styles.css';

interface IArtistRowProps {
  artist: IArtist;
  deleteFn: () => void;
}

export const ArtistRow: FunctionComponent<IArtistRowProps> = ({
  artist,
  deleteFn,
}) => {
  if (artist && !!artist.images && artist.name) {
    return <></>;
  }
  return (
    <div className="ArtistRow-container" data-test="artist-row">
      <div className="ArtistRow-left">
        {!!artist.images && (
          <img src={artist.images[0].url} alt={artist.name} />
        )}

        <div className="ArtistRow-nameContainer">
          <span>{artist.name}</span>
        </div>
      </div>
      <div className="ArtistRow-delete" onClick={deleteFn}>
        X
      </div>
    </div>
  );
};
