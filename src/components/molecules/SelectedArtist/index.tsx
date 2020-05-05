import React, { FunctionComponent } from 'react';
import './styles.css';

interface ISelectedArtistProps {
  onClickFn: () => void;
  artist: IArtist;
  last?: boolean;
}

export const SelectedArtist: FunctionComponent<ISelectedArtistProps> = ({
  onClickFn,
  artist,
  last,
}) => {
  const className = last
    ? 'SelectedArtist-container-last'
    : 'SelectedArtist-container';

  if (!artist) return <></>;

  const artistImg =
    artist.images && artist.images.length > 0 ? (
      <img
        className="max-w-full max-h-full"
        src={artist.images[0].url}
        alt={artist.name}
      />
    ) : (
      ''
    );

  return (
    <div className="container flex flex-row items-center mb-8">
      <div className="h-56 min-h-56 w-56 min-w-56 flex flex-row items-center">
        {artistImg}
      </div>
      <div className="flex flex-col justify-center pl-6">
        <h3 className="text-l lg:text-xl font-bold mb-2 text-left">
          {artist.name}
        </h3>
        {artist.tracks
          ? artist.tracks.map((track, i) => {
              return (
                <div
                  className="text-left"
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
};
