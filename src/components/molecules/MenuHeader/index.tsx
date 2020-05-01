import React, { FunctionComponent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import logo from '../../../playlish_logo.svg';
import './styles.css';

interface IMenuHeaderProps {
  styles?: object;
}
type props = IMenuHeaderProps & RouteComponentProps;

const MenuHeaderComponent: FunctionComponent<props> = ({ history, styles }) => {
  const redirectToHome = () => {
    history.push('/');
  };

  return (
    <div className="MenuHeader-brand" onClick={redirectToHome} style={styles}>
      <img src={logo} alt="logo" />
      <h2>Playlish</h2>
    </div>
  );
};

export const MenuHeader = withRouter(MenuHeaderComponent);
