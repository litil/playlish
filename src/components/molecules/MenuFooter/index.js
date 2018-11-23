import React, { Component } from 'react';
import { FaCoffee } from 'react-icons/fa';

import SocialIcon from '../../elements/SocialIcon';

import './styles.css';

export default class MenuFooter extends Component {
  linkToBuyMeACoffee = () => {
    window.location = 'https://www.buymeacoffee.com/3z7CnoJ';
  };

  render() {
    return (
      <div className="MenuFooter-container">
        <span>Scriptaculaire - 2018</span>
        {/* <div className="MenuFooter-linkContainer">
          <span>You love it? Buy me a </span>
          <SocialIcon
            icon={<FaCoffee />}
            onClickFn={this.linkToBuyMeACoffee}
            styles={{ margin: "4px 0px 0px 4px" }}
          />
        </div> */}
      </div>
    );
  }
}
