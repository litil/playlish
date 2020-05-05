import React from 'react';
import { FaCoffee, FaGithub, FaTwitter } from 'react-icons/fa';
import { Route } from 'react-router-dom';
import { Menu } from '../../organisms';
import './styles.css';

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <div className="min-h-screen flex flex-col justify-between">
          <Menu />

          <div className="container mx-auto flex flex-col align-items bg-background-900 text-blue-100 font-sans">
            <Component
              {...matchProps}
              connectedUser={rest.connectedUser}
              accessToken={rest.accessToken}
            />
          </div>

          <div className="flex flex-row items-center justify-center bg-background-900 text-blue-100 font-sans text-sm">
            <ul className="inline-flex mt-2 mb-2 h-12">
              <li className="ml-3 text-blue-100 flex flex-row items-center justify-center h-12 ml-2 mr-2 text-sm">
                <FaGithub />
                <span className="ml-1 text-sm">
                  Playlish is{' '}
                  <a
                    href="https://github.com/litil/playlish"
                    target="_blank"
                    className="text-green-500 cursor-pointer hover:text-green-700"
                  >
                    open source
                  </a>
                  !
                </span>
              </li>
              <li className="ml-3 text-blue-100 flex flex-row items-center justify-center h-12 ml-2 mr-2 text-sm">
                <FaTwitter />
                <span className="ml-1 text-sm">
                  Created by{' '}
                  <a
                    href="https://twitter.com/shipasap"
                    target="_blank"
                    className="text-green-500 cursor-pointer hover:text-green-700"
                  >
                    @Shipasap
                  </a>
                  .
                </span>
              </li>
              <li className="ml-3 text-blue-100 flex flex-row items-center justify-center h-12 ml-2 mr-2 text-sm">
                <FaCoffee />
                <span className="ml-1 text-sm">
                  Support by{' '}
                  <a
                    href="https://www.buymeacoffee.com/3z7CnoJ"
                    target="_blank"
                    className="text-green-500 cursor-pointer hover:text-green-700"
                  >
                    buying me a coffee
                  </a>{' '}
                  :)
                </span>
              </li>
            </ul>
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
