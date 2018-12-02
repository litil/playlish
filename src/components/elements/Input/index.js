import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class Input extends Component {
  static propTypes = {
    /** Value to be displayed in the input */
    value: PropTypes.string,
    /** Placeholder to be displayed in the input */
    placeholder: PropTypes.string.isRequired,
    /** Function to be called on click on the button */
    onChangeFn: PropTypes.func.isRequired,
    /** Optional additional styles */
    styles: PropTypes.object
  };
  render() {
    const { placeholder, onChangeFn, value, styles } = this.props;

    return (
      <input
        value={value}
        onChange={onChangeFn}
        placeholder={placeholder}
        style={styles}
      />
    );
  }
}
