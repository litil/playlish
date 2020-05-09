import React, { FunctionComponent } from 'react';
import { IconContext } from 'react-icons';
import { FaCoffee, FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa';
import { RouteComponentProps, withRouter } from 'react-router-dom';

interface IFooterProps {}
type props = IFooterProps & RouteComponentProps;

const FooterComponent: FunctionComponent<props> = ({ history }) => {
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

  const mailTo = () => {
    window.location.href = `mailto:guillaume.p.lambert@gmail.com`;
  };

  const activeIconCSS = 'bg-green-500 text-green-100';

  return (
    <div className="flex flex-col items-center justify-center text-sm mt-24 mb-4">
      <ul className="flex flex-row">
        <li
          className="cursor-pointer text-blue-100 hover:text-customBlue-300 ml-2 mr-2 "
          onClick={linkToGithub}
        >
          <IconContext.Provider value={{ color: '#9EAFE2', size: '1.2em' }}>
            <div>
              <FaGithub />
            </div>
          </IconContext.Provider>
        </li>
        <li
          className="cursor-pointer text-blue-100 hover:text-customBlue-300 ml-2 mr-2"
          onClick={linkToTwitter}
        >
          <IconContext.Provider value={{ color: '#9EAFE2', size: '1.2em' }}>
            <div>
              <FaTwitter />
            </div>
          </IconContext.Provider>
        </li>
        <li
          className="cursor-pointer text-blue-100 hover:text-customBlue-300 ml-2 mr-2"
          onClick={linkToBuyMeACoffee}
        >
          <IconContext.Provider value={{ color: '#9EAFE2', size: '1.2em' }}>
            <div>
              <FaCoffee />
            </div>
          </IconContext.Provider>
        </li>
        <li
          className="cursor-pointer text-blue-100 hover:text-customBlue-300 ml-2 mr-2"
          onClick={mailTo}
        >
          <IconContext.Provider value={{ color: '#9EAFE2', size: '1.2em' }}>
            <div>
              <FaEnvelope />
            </div>
          </IconContext.Provider>
        </li>
      </ul>
      <ul className="flex flex-row text-xs lg:text-sm text-customBlue-300 mt-2">
        <li>Copyright © 2020 Playlish</li>
        <li className="mx-2">•</li>
        <li>
          A{' '}
          <a
            href="https://twitter.com/shipasap"
            target="_blank"
            className="hover:text-customBlue-500 cursor-pointer"
          >
            @shipasap
          </a>{' '}
          product
        </li>
      </ul>
    </div>
  );
};

export const Footer = withRouter(FooterComponent);
