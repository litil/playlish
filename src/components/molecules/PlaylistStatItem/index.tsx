import React, { FunctionComponent } from 'react';
import './styles.css';

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
  styles,
}) => {
  return (
    <div className="PlaylistStatItem-container" style={styles}>
      {icon ? icon : ''}
      <span className="PlaylistStatItem-text">{`${text}:`}</span>
      <span className="PlaylistStatItem-value">{value}</span>
    </div>
  );
};
