import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class PlaylistStatItem extends Component {
  static propTypes = {
    /** Stat text */
    text: PropTypes.string.isRequired,
    /** Stat value */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Stat icon */
    icon: PropTypes.object,
    /** Additional styles */
    styles: PropTypes.object
  };

  render() {
    const { text, value, icon, styles } = this.props;
    return (
      <div className="PlaylistStatItem-container" style={styles}>
        {icon ? icon : ''}
        <span className="PlaylistStatItem-text">{`${text}:`}</span>
        <span className="PlaylistStatItem-value">{value}</span>
      </div>
    );
  }
}
