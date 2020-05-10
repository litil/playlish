import React from 'react';
import { Route } from 'react-router-dom';
import { Footer, Menu } from '../../organisms';
import './styles.css';

const DefaultLayout = ({ component: Component, isConnected, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <div className="min-h-screen flex flex-col justify-between pt-4">
          <Menu isConnected />

          <div className="container mx-auto flex flex-col align-items bg-customBlue-900 text-blue-100 font-sans">
            <Component
              {...matchProps}
              connectedUser={rest.connectedUser}
              accessToken={rest.accessToken}
              isConnected={rest.isConnected}
            />
          </div>

          <Footer isConnected />
        </div>
      )}
    />
  );
};

export default DefaultLayout;
