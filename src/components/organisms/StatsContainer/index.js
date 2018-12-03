import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class StatsContainer extends Component {
  static propTypes = {
    /** Component children */
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
  };

  render() {
    const { children } = this.props;

    return (
      <div className="StatsContainer-container">
        <div className="StatsContainer-innerContainer">{children}</div>
      </div>
    );
  }
}
