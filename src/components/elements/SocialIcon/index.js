import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class SocialIcon extends Component {
  static propTypes = {
    /** The icon to display */
    icon: PropTypes.object.isRequired,
    /** The function to be called when the user clicks on the component */
    onClickFn: PropTypes.func.isRequired,
    /** Additional styles */
    styles: PropTypes.object
  };

  render() {
    const { icon, onClickFn, styles } = this.props;

    return (
      <div onClick={onClickFn} className="SocialIcon-container" style={styles}>
        {icon}
      </div>
    );
  }
}
