import React, { FunctionComponent } from 'react';

interface IPlaylistStatItemProps {
  text: string;
  value?: string | number;
  icon?: object;
  styles?: object;
}

export const PlaylistStatItem: FunctionComponent<IPlaylistStatItemProps> = ({
  text,
  value,
  icon,
  styles
}) => {
  return (
    <div className="flex flex-row items-center text-customBlue-300 mx-8 md:mx-0" style={styles}>
      <span>{icon ? icon : ''}</span>
      <span className="ml-2 mr-2">{`${text}:`}</span>
      <span className=" md:mr-12">{value}</span>
    </div>
  );
};
