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
          <div className="LeftMenu-container bg-gray-900 text-gray-100">
            <Menu />
          </div>
          <div className="bg-background-100 text-blue-100 h-screen overflow-hidden font-sans ml-24">
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
