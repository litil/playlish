import React, { FunctionComponent } from 'react';
import './styles.css';

interface ISocialIconProps {
  icon: object;
  onClickFn: () => void;
  styles?: object;
}

export const SocialIcon: FunctionComponent<ISocialIconProps> = ({
  icon,
  onClickFn,
  styles,
}) => {
  return (
    <div onClick={onClickFn} className="SocialIcon-container" style={styles}>
      {icon}
    </div>
  );
};
