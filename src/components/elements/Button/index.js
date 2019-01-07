import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class Button extends Component {
  static propTypes = {
    /** Button size, either big or small */
    size: PropTypes.string.isRequired,
    /** Text to be displayed into the button */
    text: PropTypes.string.isRequired,
    /** Function to be called on click on the button */
    onClickFn: PropTypes.func.isRequired,
    /** Is the button disabled? */
    disabled: PropTypes.bool,
    /** Optional styles */
    styles: PropTypes.object
  };
  static defaultProps = {
    size: 'small',
    disabled: false
  };

  render() {
    const { size, onClickFn, text, styles, disabled } = this.props;

    return (
      <button
        onClick={onClickFn}
        className={`button-${size}`}
        style={styles}
        disabled={disabled}
      >
        {text}
      </button>
    );
  }
}
