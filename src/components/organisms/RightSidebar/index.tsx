import React, { FunctionComponent } from 'react';
import { FaCoffee, FaGithub, FaTwitter } from 'react-icons/fa';
import { SocialIcon } from '../../elements';
import './styles.css';

export const RightSidebar: FunctionComponent<{}> = () => {
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
    <div className="RightSidebar-container">
      <span>Follow me</span>

      <SocialIcon icon={<FaGithub />} onClickFn={linkToGithub} />
      <SocialIcon icon={<FaTwitter />} onClickFn={linkToTwitter} />
      <SocialIcon icon={<FaCoffee />} onClickFn={linkToBuyMeACoffee} />
    </div>
  );
};
