import React, { FunctionComponent } from 'react';
import './styles.css';

interface ISearchedArtistProps {
  onClickFn: () => void;
  artist: IArtist;
  last?: boolean;
}

export const SearchedArtist: FunctionComponent<ISearchedArtistProps> = ({
  onClickFn,
  artist,
  last,
}) => {
  const className = last
    ? 'SearchedArtist-container-last'
    : 'SearchedArtist-container';

  if (!artist) return <></>;

  const artistImg =
    artist.images && artist.images.length > 0 ? (
      <img
        className="SearchedArtist-img"
        src={artist.images[0].url}
        alt={artist.name}
      />
    ) : (
      ''
    );

  return (
    <div className={className} onClick={onClickFn}>
      {artistImg}
      <div className="SearchedArtist-info">
        <h3>{artist.name}</h3>
      </div>
    </div>
  );
};
