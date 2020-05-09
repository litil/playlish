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

  return (
    <div className="flex flex-row items-center justify-center mb-8 mt-16 w-full">
      <div className="flex flex-col items-center justify-center px-24 w-full">
        {playlistTracks.map((track: ITrack, i: number) => {
          return <TrackRow track={track} key={`${playlist.name}-track-${i}`} />;
        })}
      </div>
    </div>
  );
};
