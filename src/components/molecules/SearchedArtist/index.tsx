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
  last
}) => {
  if (!artist) return <></>;

  const artistImg =
    artist.images && artist.images.length > 0 ? (
      <img className="max-w-full max-h-full" src={artist.images[0].url} alt={artist.name} />
    ) : (
      ''
    );

  return (
    <div
      className="
        container 
        flex 
        flex-col 
        items-center 
        cursor-pointer 
        hover:text-green-500 rounded-lg"
      onClick={onClickFn}
    >
      <div className="pt-2 pl-2 pr-2 pb-1 h-48 min-h-48 w-48 min-w-48">{artistImg}</div>
      <h3 className="text-l text-customBlue-300 hover:text-blue-100">{artist.name}</h3>
    </div>
  );
};
