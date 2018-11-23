import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Menu from '../../organisms/Menu';
import RightSidebar from '../../organisms/RightSidebar';

import './styles.css';

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
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
