import React, { FunctionComponent } from 'react';
import './styles.css';

interface IMenuLinkProps {
  text: string;
  redirectTo: () => void;
  icon?: object;
  styles?: object;
}

export const MenuLink: FunctionComponent<IMenuLinkProps> = ({
  text,
  redirectTo,
  icon,
  styles,
}) => {
  return (
    <div className="MenuLink-container" onClick={redirectTo} style={styles}>
      {icon ? icon : ''}
      <span>{text}</span>
    </div>
  );
};
