import React, { FunctionComponent } from 'react';
import { PlaylistItem } from '../../molecules/PlaylistItem';

interface IPlaylistsListProps {
  playlists?: IPlaylist[];
}

export const PlaylistsList: FunctionComponent<IPlaylistsListProps> = ({ playlists }) => {
  if (!playlists || playlists.length < 1) return <></>;

  return (
    <div className="flex flex-row flex-wrap w-full items-center justify-center mt-12">
      {playlists.map((p, i) => {
        if (p.tracks.total > 0) return <PlaylistItem playlist={p} key={`playlists-${i}`} />;
        else return '';
      })}
    </div>
  );
};
