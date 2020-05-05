import React, { FunctionComponent } from 'react';
import { PlaylistItem } from '../../molecules/';

interface IPlaylistsListProps {
  playlists?: IPlaylist[];
}

export const PlaylistsList: FunctionComponent<IPlaylistsListProps> = ({ playlists }) => {
  if (!playlists || playlists.length < 1) return <></>;

  return (
    <div className="flex flex-row flex-wrap w-full items-center justify-center mb-8 mt-16">
      {playlists.map((p, i) => {
        if (p.tracks.total > 0) return <PlaylistItem playlist={p} key={`playlists-${i}`} />;
        else return '';
      })}
    </div>
  );
};
