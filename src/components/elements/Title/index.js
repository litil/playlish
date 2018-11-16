import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class Title extends Component {
  static propTypes = {
    /** The title to display */
    text: PropTypes.string.isRequired
  };

  render() {
    return <h1>{this.props.text}</h1>;
  }
}
