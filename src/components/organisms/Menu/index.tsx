import React, { FunctionComponent } from 'react';
import { IconContext } from 'react-icons';
import { FaPlusCircle } from 'react-icons/fa';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AuthConsumer } from '../../../contexts/AuthContext';
import logo from '../../../playlish_logo_white.svg';
import './styles.css';

interface IMenuProps {}
type props = IMenuProps & RouteComponentProps;

const MenuComponent: FunctionComponent<props> = ({ history }) => {
  const redirectTo = (pathname: string) => {
    history.push(pathname);
  };

  return (
    <div>
      <AuthConsumer>
        {({ isConnected, user }) => (
          <div>
            <>
              <nav>
                <div className="container mx-auto px-6 py-1 mb-12 flex justify-between items-center">
                  <div
                    className="flex flex-row items-center cursor-pointer"
                    onClick={() => redirectTo('/playlists')}
                  >
                    <img src={logo} alt="logo" className="h-6 w-6 mr-2" />
                    <h1 className="font-bold text-xl lg:text-2xl text-blue-100 font-sans tracking-widest">
                      Playlish
                    </h1>
                  </div>
                  {isConnected && !!user && (
                    <ul className="flex flex-row">
                      <li className="cursor-pointer text-blue-100 hover:text-customBlue-300 ml-4">
                        <button
                          // class="bg-transparent hover:bg-blue-500 text-blue-100 font-semibold py-2 px-8 border border-solid border-blue-100 hover:border-transparent uppercase rounded-xl flex flex-row items-center justify-center"
                          className="
                            bg-customBlue-500 hover:bg-customBlue-700 
                            text-blue-100 font-semibold 
                            py-1 px-3
                            text-xs
                            border border-solid border-transparent 
                            rounded-xl 
                            flex flex-row items-center justify-center"
                          onClick={() => redirectTo('/playlists/create')}
                        >
                          <IconContext.Provider value={{ size: '1em' }}>
                            <div>
                              <FaPlusCircle />
                            </div>
                          </IconContext.Provider>
                          <span className="ml-1">Create playlist</span>
                        </button>
                      </li>
                    </ul>
                  )}
                </div>
              </nav>
            </>
          </div>
        )}
      </AuthConsumer>
    </div>
  );
};

export const Menu = withRouter(MenuComponent);
