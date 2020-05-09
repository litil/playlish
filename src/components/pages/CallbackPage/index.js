import PropTypes from 'prop-types';
import * as qs from 'query-string';
import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { FaCoffee, FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa';
import { connect } from 'react-redux';
import { fetchUserRequest } from '../../../actions/fetchUserAction';
import { AuthContext } from '../../../contexts/AuthContext';
import logo from '../../../playlish_logo_white.svg';
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
      pathname: '/playlists/create'
    });
  };

  linkToGithub = () => {
    window.open('https://github.com/litil/playlish');
  };

  linkToTwitter = () => {
    window.open('https://twitter.com/shipasap');
  };

  linkToBuyMeACoffee = () => {
    window.open('https://www.buymeacoffee.com/3z7CnoJ');
  };

  mailTo = () => {
    window.location.href = `mailto:guillaume.p.lambert@gmail.com`;
  };

  render() {
    const { isFetchingUser, connectedUser } = this.props;

    const receivedUser = isFetchingUser === false && connectedUser && connectedUser.display_name;

    // automatically redirecting the user to the authenticated page
    if (receivedUser) {
      let value = this.context;
      value.login(connectedUser, this.state.accessToken);

      this.props.history.push({
        pathname: '/playlists/create'
      });
    }

    return (
      <div className="min-h-screen flex flex-col justify-between h-full pt-4 WelcomePage-container">
        <nav>
          <div className="container mx-auto px-6 py-2 mb-12 flex justify-between items-center">
            <div
              className="flex flex-row items-center cursor-pointer"
              onClick={() => this.redirectTo('/')}
            >
              <img src={logo} alt="logo" className="h-6 w-6 mr-2" />
              <h1 className="font-bold text-xl lg:text-2xl text-blue-100 font-sans tracking-widest">
                Playlish
              </h1>
            </div>
          </div>
        </nav>

        <div className="container mx-auto flex flex-col justify-center align-items mb-48">
          <h2 className="font-bold text-4xl lg:text-6xl text-blue-100 mb-1 tracking-widest mt-32 justify-center items-center">
            Welcome to Playlish
          </h2>
          <div className="container flex flex-row items-center justify-center">
            <h4 class="flex text-lg lg:text-xl text-customBlue-300 mb-12 w-1/2"></h4>
          </div>
        </div>

        <div className="container mx-auto flex flex-col justify-center align-items">
          <div className="flex flex-col items-center justify-center text-sm mt-24 mb-4">
            <ul className="flex flex-row">
              <li
                className="cursor-pointer text-blue-100 hover:text-customBlue-300 ml-2 mr-2 "
                onClick={this.linkToGithub}
              >
                <IconContext.Provider value={{ color: '#9EAFE2', size: '1.2em' }}>
                  <div>
                    <FaGithub />
                  </div>
                </IconContext.Provider>
              </li>
              <li
                className="cursor-pointer text-blue-100 hover:text-customBlue-300 ml-2 mr-2"
                onClick={this.linkToTwitter}
              >
                <IconContext.Provider value={{ color: '#9EAFE2', size: '1.2em' }}>
                  <div>
                    <FaTwitter />
                  </div>
                </IconContext.Provider>
              </li>
              <li
                className="cursor-pointer text-blue-100 hover:text-customBlue-300 ml-2 mr-2"
                onClick={this.linkToBuyMeACoffee}
              >
                <IconContext.Provider value={{ color: '#9EAFE2', size: '1.2em' }}>
                  <div>
                    <FaCoffee />
                  </div>
                </IconContext.Provider>
              </li>
              <li
                className="cursor-pointer text-blue-100 hover:text-customBlue-300 ml-2 mr-2"
                onClick={this.mailTo}
              >
                <IconContext.Provider value={{ color: '#9EAFE2', size: '1.2em' }}>
                  <div>
                    <FaEnvelope />
                  </div>
                </IconContext.Provider>
              </li>
            </ul>
            <ul className="flex flex-row text-xs lg:text-sm text-customBlue-300 mt-2">
              <li>Copyright © 2020 Playlish</li>
              <li className="mx-2">•</li>
              <li>
                A{' '}
                <a
                  href="https://twitter.com/shipasap"
                  target="_blank"
                  className="hover:text-customBlue-500 cursor-pointer"
                >
                  @shipasap
                </a>{' '}
                product
              </li>
            </ul>
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

CallbackPage.contextType = AuthContext; // This part is important to access context values

export default connect(mapStateToProps, mapDispatchToProps)(CallbackPage);
