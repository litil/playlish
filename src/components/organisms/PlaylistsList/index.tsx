import React, { FunctionComponent } from 'react';
import { PlaylistItem } from '../../molecules/';
import './styles.css';

interface IPlaylistsListProps {
  playlists?: IPlaylist[];
}

export const PlaylistsList: FunctionComponent<IPlaylistsListProps> = ({
  playlists,
}) => {
  if (!playlists || playlists.length < 1) return <></>;

  return (
    <div className="PlaylistsList-container">
      {playlists.map((p, i) => {
        if (p.tracks.total > 0)
          return <PlaylistItem playlist={p} key={`playlists-${i}`} />;
        else return '';
      })}
    </div>
  );
};
