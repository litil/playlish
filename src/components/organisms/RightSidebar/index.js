import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaCoffee } from 'react-icons/fa';

import SocialIcon from '../../elements/SocialIcon';

import './styles.css';

export default class RightSidebar extends Component {
  linkToGithub = () => {
    window.location = 'https://github.com/litil/playlish';
  };

  linkToTwitter = () => {
    window.location = 'https://twitter.com/shipasap';
  };

  linkToBuyMeACoffee = () => {
    window.location = 'https://www.buymeacoffee.com/3z7CnoJ';
  };

  render() {
    return (
      <div className="RightSidebar-container">
        <span>Follow me</span>

        <SocialIcon icon={<FaGithub />} onClickFn={this.linkToGithub} />
        <SocialIcon icon={<FaTwitter />} onClickFn={this.linkToTwitter} />
        <SocialIcon icon={<FaCoffee />} onClickFn={this.linkToBuyMeACoffee} />
      </div>
    );
  }
}
