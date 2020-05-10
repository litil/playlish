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
    // <div
    //   className={`flex flex-row justify-start items-center py-2 border-b border-gray-800 ${
    //     header ? 'text-customBlue-300' : ''
    //   }`}
    // >
    //   <span className="TrackRow-title truncate">{trackDetail.name}</span>
    //   <span className="TrackRow-artist truncate">{artist}</span>
    //   <span className="TrackRow-album truncate">{album}</span>
    //   <span className="TrackRow-date">{dateValue}</span>
    //   <span className="TrackRow-popularity">{trackDetail.popularity}</span>
    // </div>

    <div className="flex flex-col justify-center items-start border-b border-customBlue-300 w-full py-4">
      <div className="flex flex-row justify-between w-full">
        <span className="text-blue-100">{trackDetail.name}</span>
        <span className="text-customBlue-300 text-sm">{`added ${dateValue}`}</span>
      </div>
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row items-center">
          <span className="text-customBlue-300 italic text-sm">by&nbsp;</span>
          <span className="text-customBlue-300 text-sm">{`${artist} •`}</span>
          <span className="text-customBlue-300 italic text-sm">&nbsp;from&nbsp;</span>
          <span className="text-customBlue-300 text-sm">{`${album}`}</span>
        </div>
        <span className="text-customBlue-300 text-sm">{`popularity: ${trackDetail.popularity}`}</span>
      </div>
    </div>
  );
};
