import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class MenuLink extends Component {
  static propTypes = {
    /** Link text */
    text: PropTypes.string.isRequired,
    /** Function to redirect the user to the correct view */
    redirectTo: PropTypes.func.isRequired,
    /** Link icon */
    icon: PropTypes.object,
    /** Additional styles */
    styles: PropTypes.object
  };

  render() {
    const { text, redirectTo, icon, styles } = this.props;
    return (
      <div className="MenuLink-container" onClick={redirectTo} style={styles}>
        {icon ? icon : ''}
        <span>{text}</span>
      </div>
    );
  }
}
