import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default class HeaderUser extends Component {
  render() {
    return (
      <ul className="HeaderMenu-ul">
        <li>
          <Link to="/create">New playlish</Link>
        </li>
        <li>
          <Link to="/playlists">My playlishs</Link>
        </li>
      </ul>
    );
  }
}
