import React, { FunctionComponent } from 'react';
import { FaCoffee, FaGithub, FaTwitter } from 'react-icons/fa';
import { SocialIcon } from '../../elements';
import './styles.css';

export const MenuFollow: FunctionComponent<{}> = ({}) => {
  const linkToGithub = () => {
    window.open('https://github.com/litil/playlish');
  };

  const linkToTwitter = () => {
    window.open('https://twitter.com/shipasap');
  };

  const linkToBuyMeACoffee = () => {
    window.open('https://www.buymeacoffee.com/3z7CnoJ');
  };

  return (
    <div className="MenuFollow-container">
      <span>Follow me</span>

      <div className="MenuFollow-icons">
        <SocialIcon
          icon={<FaGithub />}
          onClickFn={linkToGithub}
          styles={{ marginRight: '8px', marginBottom: '0px' }}
        />
        <SocialIcon
          icon={<FaTwitter />}
          onClickFn={linkToTwitter}
          styles={{ marginRight: '8px', marginBottom: '0px' }}
        />
        <SocialIcon
          icon={<FaCoffee />}
          onClickFn={linkToBuyMeACoffee}
          styles={{ marginRight: '8px', marginBottom: '0px' }}
        />
      </div>
    </div>
  );
};
