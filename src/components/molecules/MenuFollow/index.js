import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaCoffee } from 'react-icons/fa';

import SocialIcon from '../../elements/SocialIcon';

import './styles.css';

export default class MenuFollow extends Component {
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
      <div className="MenuFollow-container">
        <span>Follow me</span>

        <div className="MenuFollow-icons">
          <SocialIcon
            icon={<FaGithub />}
            onClickFn={this.linkToGithub}
            styles={{ marginRight: '8px', marginBottom: '0px' }}
          />
          <SocialIcon
            icon={<FaTwitter />}
            onClickFn={this.linkToTwitter}
            styles={{ marginRight: '8px', marginBottom: '0px' }}
          />
          <SocialIcon
            icon={<FaCoffee />}
            onClickFn={this.linkToBuyMeACoffee}
            styles={{ marginRight: '8px', marginBottom: '0px' }}
          />
        </div>
      </div>
    );
  }
}
