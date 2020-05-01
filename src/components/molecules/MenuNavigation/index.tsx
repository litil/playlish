import React, { FunctionComponent } from 'react';
import { FaMusic, FaPlus } from 'react-icons/fa';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { MenuLink } from '../';
import './styles.css';

interface IMenuNavigationProps {}
type props = IMenuNavigationProps & RouteComponentProps;

const MenuNavigationClass: FunctionComponent<props> = ({ history }) => {
  const redirectTo = (pathname: string) => {
    history.push(pathname);
  };

  return (
    <div className="MenuHeader-container">
      <MenuLink
        text="My Playlishs"
        icon={<FaMusic />}
        redirectTo={() => redirectTo('/playlists')}
        styles={{ marginBottom: '32px' }}
      />
      <MenuLink
        text="Create Playlishs"
        icon={<FaPlus />}
        redirectTo={() => redirectTo('/playlists/create')}
        styles={{ marginBottom: '32px' }}
      />
      {/* <MenuLink
          text="Analyze Playlishs"
          icon={<FaChartBar />}
          redirectTo={() => this.redirectTo('/playlists')}
        /> */}
    </div>
  );
};

export const MenuNavigation = withRouter(MenuNavigationClass);
