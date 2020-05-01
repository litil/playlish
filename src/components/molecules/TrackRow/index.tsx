import { formatDistance } from 'date-fns';
import React, { FunctionComponent } from 'react';
import { getValidDate } from '../../../helpers';
import './styles.css';

interface ITrackRowProps {
  header?: boolean;
  track: ITrack;
}

export const TrackRow: FunctionComponent<ITrackRowProps> = ({
  header,
  track,
}) => {
  const trackDetail = track.track;

  if (!track) return <></>;

  const artist = trackDetail.artists
    ? trackDetail.artists.map((i) => i.name).join(', ')
    : 'Unknown';
  const album = trackDetail.album ? trackDetail.album.name : 'Unknown';

  const dateNow = new Date();
  console.log('track.added_at', track.added_at);
  const dateValue =
    track.added_at === 'Added'
      ? 'Added'
      : formatDistance(getValidDate(track.added_at), dateNow);

  const containerClassName = header
    ? 'TrackRow-container header'
    : 'TrackRow-container';

  return (
    <div className={containerClassName}>
      <span className="TrackRow-title truncate">{trackDetail.name}</span>
      <span className="TrackRow-artist truncate">{artist}</span>
      <span className="TrackRow-album truncate">{album}</span>
      <span className="TrackRow-date">{dateValue}</span>
      <span className="TrackRow-popularity">{trackDetail.popularity}</span>
    </div>
  );
};
