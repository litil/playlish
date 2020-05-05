import React, { FunctionComponent } from 'react';
import { TrackRow } from '../../molecules';

interface IPlaylistDetailProps {
  playlist: IPlaylist;
  playlistTracks: ITrack[];
}

export const PlaylistDetail: FunctionComponent<IPlaylistDetailProps> = ({
  playlist,
  playlistTracks
}) => {
  if (!playlist) return <></>;

  const headerTrack = {
    added_at: 'Added',
    name: 'Title',
    id: '1',
    track: {
      artists: [{ id: '1', name: 'Artist' }],
      album: { name: 'Album' },
      popularity: 'Popularity',
      name: 'Title'
    }
  };

  return (
    <div className="flex flex-row flex-wrap w-full items-center justify-center mb-8 mt-16">
      <div className="flex flex-row flex-wrap w-full items-center justify-center px-12">
        <TrackRow track={headerTrack} key={`${playlist.name}-track-header`} header={true} />
        {playlistTracks.map((track: ITrack, i: number) => {
          return <TrackRow track={track} key={`${playlist.name}-track-${i}`} />;
        })}
      </div>
    </div>
  );
};
