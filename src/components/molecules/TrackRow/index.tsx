import { formatDistance } from 'date-fns';
import React, { FunctionComponent } from 'react';
import { getValidDate } from '../../../helpers';
import './styles.css';

interface ITrackRowProps {
  header?: boolean;
  track: ITrack;
}

export const TrackRow: FunctionComponent<ITrackRowProps> = ({ header, track }) => {
  const trackDetail = track.track;

  if (!track) return <></>;

  const artist = trackDetail.artists ? trackDetail.artists.map(i => i.name).join(', ') : 'Unknown';
  const album = trackDetail.album ? trackDetail.album.name : 'Unknown';

  const dateNow = new Date();
  const dateValue =
    track.added_at === 'Added' ? 'Added' : formatDistance(getValidDate(track.added_at), dateNow);

  return (
    <div className="flex flex-row justify-between border-b border-customBlue-300 w-full py-4 px-2">
      <div className="flex flex-col items-start">
        <span className="text-blue-100 text-left">{trackDetail.name}</span>
        <div className="flex flex-row items-start">
          <span className="text-customBlue-300 italic text-sm">by&nbsp;</span>
          <span className="text-customBlue-300 text-sm text-left">{`${artist} •`}</span>
        </div>
        <div className="flex flex-row items-start">
          <span className="text-customBlue-300 italic text-sm">from&nbsp;</span>
          <span className="text-customBlue-300 text-sm text-left">{`${album}`}</span>
        </div>
      </div>

      <div className="flex flex-col items-end">
        <span className="text-customBlue-300 text-sm text-right">{`added ${dateValue}`}</span>
        <span className="text-customBlue-300 text-sm text-right">{`popularity: ${trackDetail.popularity}`}</span>
      </div>
    </div>
  );
};
