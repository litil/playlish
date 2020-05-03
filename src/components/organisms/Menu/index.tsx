import React, { FunctionComponent } from 'react';
import { FaCoffee, FaGithub, FaMusic, FaPlus, FaTwitter } from 'react-icons/fa';
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { AuthConsumer } from '../../../contexts/AuthContext';
import logo from '../../../playlish_logo.svg';
import { SocialIcon } from '../../elements';
import './styles.css';

interface IMenuProps {}
type props = IMenuProps & RouteComponentProps;

const MenuComponent: FunctionComponent<props> = ({ history }) => {
  const redirectTo = (pathname: string) => {
    history.push(pathname);
  };

  const linkToGithub = () => {
    window.open('https://github.com/litil/playlish');
  };

  const linkToTwitter = () => {
    window.open('https://twitter.com/shipasap');
  };

  const linkToBuyMeACoffee = () => {
    window.open('https://www.buymeacoffee.com/3z7CnoJ');
  };

  const isActive = (pathname: string) => {
    return history.location.pathname === pathname;
  };

  const activeIconCSS = 'bg-green-500 text-green-100';

  return (
    <div>
      <AuthConsumer>
        {({ isConnected, user }) => (
          <div>
            {isConnected && user ? (
              <>
                <div className="flex flex-col justify-between h-screen overflow-hidden items-center">
                  <div className="container flex flex-col items-center">
                    <div className="mt-2 mb-12" onClick={() => redirectTo('/')}>
                      <img src={logo} alt="logo" className="h-8 w-8" />
                    </div>
                    <div
                      className={`mb-2 p-2 m-2 hover:bg-green-500 hover:text-green-100 rounded-lg cursor-pointer ${
                        isActive('/playlists') ? activeIconCSS : ''
                      }`}
                      onClick={() => redirectTo('/playlists')}
                    >
                      <FaMusic />
                    </div>
                    <div
                      className={`mb-2 p-2 m-2 hover:bg-green-500 hover:text-green-100 rounded-lg cursor-pointer ${
                        isActive('/playlists/create') ? activeIconCSS : ''
                      }`}
                      onClick={() => redirectTo('/playlists/create')}
                    >
                      <FaPlus />
                    </div>
                  </div>

                  <div className="container flex flex-col items-center">
                    <SocialIcon
                      icon={<FaGithub />}
                      onClickFn={linkToGithub}
                      styles={{ marginBottom: '12px' }}
                    />
                    <SocialIcon
                      icon={<FaTwitter />}
                      onClickFn={linkToTwitter}
                      styles={{ marginBottom: '12px' }}
                    />
                    <SocialIcon
                      icon={<FaCoffee />}
                      onClickFn={linkToBuyMeACoffee}
                      styles={{ marginBottom: '24px' }}
                    />
                  </div>
                </div>
              </>
            ) : (
              <Redirect to="/" />
            )}
          </div>
        )}
      </AuthConsumer>
    </div>
  );
};

export const Menu = withRouter(MenuComponent);
