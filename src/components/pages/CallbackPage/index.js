import PropTypes from 'prop-types';
import * as qs from 'query-string';
import React, { Component } from 'react';
import { FaCoffee, FaGithub, FaTwitter } from 'react-icons/fa';
import { connect } from 'react-redux';
import { fetchUserRequest } from '../../../actions/fetchUserAction';
import { AuthContext } from '../../../contexts/AuthContext';
import logo from '../../../playlish_logo.svg';
import { SocialIcon } from '../../elements';
import './styles.css';

class CallbackPage extends Component {
  static propTypes = {
    /** The Spotify connected user */
    connectedUser: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      playlistName: '',
    };
  }

  componentDidMount() {
    const parsed = qs.parse(this.props.location.hash, {
      ignoreQueryPrefix: true,
    });
    const accessToken = parsed.access_token;

    this.setState({ accessToken: accessToken });
    this.props.fetchUser(accessToken);
  }

  redirectToPlaylists = (loginFn) => {
    // update the Auth Context
    const user = this.props.connectedUser;
    loginFn(user, this.state.accessToken);

    // redirect to the list of playlists
    this.props.history.push({
      pathname: '/playlists/create',
    });
  };

  render() {
    const { isFetchingUser, connectedUser } = this.props;

    const receivedUser =
      isFetchingUser === false && connectedUser && connectedUser.display_name;

    // automatically redirecting the user to the authenticated page
    if (receivedUser) {
      let value = this.context;
      value.login(connectedUser, this.state.accessToken);

      this.props.history.push({
        pathname: '/playlists/create',
      });
    }

    return (
      <div class="bg-background-900 text-blue-100 h-screen overflow-hidden font-sans">
        <nav>
          <div class="container mx-auto px-6 py-2 flex justify-between items-center">
            <div className="flex flex-row items-center">
              <img src={logo} alt="logo" class="h-8 w-8 mr-2" />
              <h1 class="font-bold text-2xl lg:text-4xl text-green-500 uppercase">
                Playlish
              </h1>
            </div>
            <ul class="inline-flex mt-2 h-4">
              <li class="ml-3">
                <SocialIcon icon={<FaGithub />} onClickFn={this.linkToGithub} />
              </li>
              <li class="ml-3">
                <SocialIcon
                  icon={<FaTwitter />}
                  onClickFn={this.linkToTwitter}
                />
              </li>
              <li class="ml-3">
                <SocialIcon
                  icon={<FaCoffee />}
                  onClickFn={this.linkToBuyMeACoffee}
                />
              </li>
            </ul>
          </div>
        </nav>

        <div className="container mx-auto h-full flex flex-col justify-center align-items">
          <h2 class="font-bold text-3xl lg:text-5xl text-blue-100 uppercase mb-1">
            Welcome to Playlish
          </h2>
          <h4 class="text-lg lg:text-xl text-blue-100 mb-12 pb-12">
            Please wait while we're loading your information
          </h4>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (accessToken) => dispatch(fetchUserRequest(accessToken)),
  };
};

const mapStateToProps = (state) => {
  const { userReducer } = state;

  const connectedUser = userReducer ? userReducer.user : {};
  const isFetchingUser = userReducer ? userReducer.isFetchingUser : false;

  return {
    connectedUser,
    isFetchingUser,
  };
};

CallbackPage.contextType = AuthContext; // This part is important to access context values

export default connect(mapStateToProps, mapDispatchToProps)(CallbackPage);
