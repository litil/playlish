import React, { Component } from 'react';
import { FaMusic, FaPlus, FaChartBar } from 'react-icons/fa';
import { withRouter } from 'react-router';

import MenuLink from '../MenuLink';

import './styles.css';

class MenuNavigationClass extends Component {
  redirectTo = pathname => {
    // redirect to the homepage
    this.props.history.push({
      pathname
    });
  };

  render() {
    return (
      <div className="MenuHeader-container">
        <MenuLink
          text="My Playlishs"
          icon={<FaMusic />}
          redirectTo={() => this.redirectTo('/playlists')}
          styles={{ marginBottom: '32px' }}
        />
        <MenuLink
          text="Create Playlishs"
          icon={<FaPlus />}
          redirectTo={() => this.redirectTo('/playlists')}
          styles={{ marginBottom: '32px' }}
        />
        <MenuLink
          text="Analyze Playlishs"
          icon={<FaChartBar />}
          redirectTo={() => this.redirectTo('/playlists')}
        />
      </div>
    );
  }
}

const MenuNavigation = withRouter(MenuNavigationClass);
export default MenuNavigation;
