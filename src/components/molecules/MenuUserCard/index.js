import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { AuthConsumer } from '../../../contexts/AuthContext';

import './styles.css';

export default class MenuUserCard extends Component {
  static propTypes = {
    /** Additional styles */
    styles: PropTypes.object
  };

  render() {
    return (
      <AuthConsumer>
        {({ isConnected, user }) => (
          <>
            {isConnected && user ? (
              <>
                <div
                  className="MenuUserCard-container"
                  style={this.props.styles}
                >
                  <img src={user.images[0].url} alt={user.display_name} />
                  <span className="MenuUserCard-name">{user.display_name}</span>
                  <span className="MenuUserCard-country">{user.country}</span>
                  <div className="MenuUserCard-stats">
                    <div className="MenuUserCard-statItem">
                      <span className="MenuUserCard-statValue">
                        {user.product}
                      </span>
                      <span className="MenuUserCard-statLabel">
                        Subscription
                      </span>
                    </div>
                    <div className="MenuUserCard-statItem">
                      <span className="MenuUserCard-statValue">
                        {user.followers.total}
                      </span>
                      <span className="MenuUserCard-statLabel">Fans</span>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ''
            )}
          </>
        )}
      </AuthConsumer>
    );
  }
}
