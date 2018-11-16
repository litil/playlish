import { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class PageDescription extends Component {
  static propTypes = {
    /** Children to display, usually <p> tag */
    children: PropTypes.array.isRequired
  };

  render() {
    return this.props.children;
  }
}
