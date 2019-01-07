import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class PageCover extends Component {
  static propTypes = {
    /** Page title */
    title: PropTypes.string.isRequired,
    /** The absolute path to the image src */
    src: PropTypes.string.isRequired,
    /** The image alternative text */
    alt: PropTypes.string.isRequired
  };

  render() {
    const { src, alt, title } = this.props;

    return (
      <div className="PageCover-imgContainer">
        <div className="PageCover-innerImgContainer">
          <img src={src} alt={alt} />
        </div>
        <h1>{title}</h1>
      </div>
    );
  }
}
