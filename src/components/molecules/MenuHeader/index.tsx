import React, { FunctionComponent } from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../../../playlish_logo.svg';
import './styles.css';

interface IMenuHeaderProps {
  styles?: object;
  push: (path: string) => void;
}

const MenuHeaderComponent: FunctionComponent<IMenuHeaderProps> = ({
  push,
  styles,
}) => {
  const redirectToHome = () => {
    push('/');
  };

  return (
    <div className="MenuHeader-brand" onClick={redirectToHome} style={styles}>
      <img src={logo} alt="logo" />
      <h2>Playlish</h2>
    </div>
  );
};

export const MenuHeader = withRouter(MenuHeaderComponent);
