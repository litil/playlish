import React from 'react';
import { Route } from 'react-router-dom';
import { Menu } from '../../organisms';
import './styles.css';

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <div className="">
          <Menu />

          <div className="container mx-auto min-h-screen flex flex-col align-items bg-background-100 text-blue-100 font-sans">
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
