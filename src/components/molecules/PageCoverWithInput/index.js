import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from '../../elements/Input';

import './styles.css';

export default class PageCoverWithInput extends Component {
  static propTypes = {
    /** Playlist input placeholder */
    placeholder: PropTypes.string,
    /** The absolute path to the image src */
    src: PropTypes.string.isRequired,
    /** The image alternative text */
    alt: PropTypes.string.isRequired,
    /** Function called after a change in the input */
    onChangeFn: PropTypes.func.isRequired
  };

  render() {
    const { src, alt, placeholder, value, onChangeFn } = this.props;

    return (
      <div className="PageCoverWithInput-imgContainer">
        <div className="PageCoverWithInput-innerImgContainer">
          <img src={src} alt={alt} />
        </div>
        <Input
          placeholder={placeholder}
          value={value}
          onChangeFn={onChangeFn}
          styles={{ marginLeft: '48px', marginBottom: '32px' }}
        />
      </div>
    );
  }
}
