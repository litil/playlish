import React from 'react';
import { Route } from 'react-router-dom';
import { Menu } from '../../organisms';
import './styles.css';

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <div className="DefaultLayout-container">
          <div className="LeftMenu-container">
            <Menu />
          </div>
          <div className="MainComponent-container">
            <Component
              {...matchProps}
              connectedUser={rest.connectedUser}
              accessToken={rest.accessToken}
            />
          </div>
          {/* <div className="RightMenu-container">
            <RightSidebar />
          </div> */}
        </div>
      )}
    />
  );
};

export default DefaultLayout;
