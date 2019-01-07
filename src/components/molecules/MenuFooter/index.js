import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class MenuFooter extends Component {
  static propTypes = {
    /** Optional styles */
    styles: PropTypes.object
  };

  linkToBuyMeACoffee = () => {
    window.location = 'https://www.buymeacoffee.com/3z7CnoJ';
  };

  render() {
    return (
      <div className="MenuFooter-container" style={this.props.styles}>
        <span>Scriptaculaire - 2019</span>
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
