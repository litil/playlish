import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as qs from 'query-string';

import { AuthConsumer } from '../../../contexts/AuthContext';
import { fetchUserRequest } from '../../../actions/fetchUserAction';
import logo from '../../../playlish_logo.svg';

import './styles.css';

class CallbackPage extends Component {
  static propTypes = {
    /** The Spotify connected user */
    connectedUser: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      playlistName: ''
    };
  }

  componentDidMount() {
    const parsed = qs.parse(this.props.location.hash, {
      ignoreQueryPrefix: true
    });
    const accessToken = parsed.access_token;

    this.setState({ accessToken: accessToken });
    this.props.fetchUser(accessToken);
  }

  redirectToPlaylists = loginFn => {
    // update the Auth Context
    const user = this.props.connectedUser;
    loginFn(user, this.state.accessToken);

    // redirect to the list of playlists
    this.props.history.push({
      pathname: '/playlists/list'
    });
  };

  render() {
    const { isFetchingUser, connectedUser } = this.props;

    const receivedUser =
      isFetchingUser === false && connectedUser && connectedUser.display_name;

    return (
      <div className="CallbackPage-container">
        <div className="CallbackPage-innerContainer">
          <div className="CallbackPage-brand">
            <img src={logo} alt="logo" />
            <h1>Playlish</h1>
          </div>
          <div className="CallbackPage-slogan">
            <h3>Fastest playlist generator for Spotify</h3>
          </div>

          <div className="Loading-container">
            <AuthConsumer>
              {({ isConnected, login, logout }) => (
                <div>
                  {receivedUser ? (
                    <button onClick={() => this.redirectToPlaylists(login)}>
                      {`${
                        connectedUser.display_name
                      }, ready to create playlists?`}
                    </button>
                  ) : (
                    "Please wait while we're loading your profile..."
                  )}
                </div>
              )}
            </AuthConsumer>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: accessToken => dispatch(fetchUserRequest(accessToken))
  };
};

const mapStateToProps = state => {
  const { userReducer } = state;

  const connectedUser = userReducer ? userReducer.user : {};
  const isFetchingUser = userReducer ? userReducer.isFetchingUser : false;

  return {
    connectedUser,
    isFetchingUser
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CallbackPage);
