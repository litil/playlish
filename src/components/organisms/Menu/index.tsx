import React, { FunctionComponent } from 'react';
import { FaCoffee, FaGithub, FaPlus, FaTwitter } from 'react-icons/fa';
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
                <nav>
                  <div className="container mx-auto px-6 py-2 mb-12 flex justify-between items-center">
                    <div className="flex flex-row items-center">
                      <img src={logo} alt="logo" className="h-8 w-8 mr-2" />
                      <h1 className="font-bold text-2xl lg:text-4xl text-green-500 uppercase">
                        Playlish
                      </h1>
                    </div>
                    <ul className="inline-flex mt-2 h-4">
                      <li className="text-xl ml-3 text-green-100 hover:text-green-500 cursor-pointer">
                        <FaPlus />
                      </li>
                      <li className="ml-3">
                        <SocialIcon
                          icon={<FaGithub />}
                          onClickFn={linkToGithub}
                        />
                      </li>
                      <li className="ml-3">
                        <SocialIcon
                          icon={<FaTwitter />}
                          onClickFn={linkToTwitter}
                        />
                      </li>
                      <li className="ml-3">
                        <SocialIcon
                          icon={<FaCoffee />}
                          onClickFn={linkToBuyMeACoffee}
                        />
                      </li>
                    </ul>
                  </div>
                </nav>
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
