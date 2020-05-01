import React, { FunctionComponent } from 'react';
import { TrackRow } from '../../molecules';
import './styles.css';

interface IPlaylistDetailProps {
  playlist: IPlaylist;
  playlistTracks: ITrack[];
}

export const PlaylistDetail: FunctionComponent<IPlaylistDetailProps> = ({
  playlist,
  playlistTracks,
}) => {
  if (!playlist) return <></>;

  const headerTrack = {
    added_at: 'Added',
    track: {
      artists: [{ name: 'Artist' }],
      album: { name: 'Album' },
      popularity: 'Popularity',
      name: 'Title',
    },
  };

  return (
    <div className="PlaylistDetail-container">
      <div className="PlaylistDetail-innerContainer">
        <TrackRow
          track={headerTrack}
          key={`${playlist.name}-track-header`}
          header={true}
        />
        {playlistTracks.map((track: ITrack, i: number) => {
          return <TrackRow track={track} key={`${playlist.name}-track-${i}`} />;
        })}
      </div>
    </div>
  );
};
