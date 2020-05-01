import React, { FunctionComponent } from 'react';
import { ArtistRow } from '../../molecules';
import './styles.css';

interface IartistsProps {
  artists?: IArtist[];
  deleteFn: (artist: IArtist) => void;
}

export const ArtistList: FunctionComponent<IartistsProps> = ({
  artists,
  deleteFn,
}) => {
  return (
    <div className="ArtistList-container" data-test="artist-list-container">
      {artists && artists.length > 0
        ? artists.map((artist, i) => (
            <ArtistRow
              key={`artist-row-${i}`}
              artist={artist}
              deleteFn={() => deleteFn(artist)}
            />
          ))
        : 'No artist selected yet'}
    </div>
  );
};
