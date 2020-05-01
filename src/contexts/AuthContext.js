import React from 'react';

const AuthContext = React.createContext({
  user: undefined,
  isConnected: false,
  spotifyApiToken: undefined,
});

class AuthProvider extends React.Component {
  state = { user: undefined, isConnected: false, spotifyApiToken: undefined };
  // state = {
  //   user: {
  //     country: 'FR',
  //     display_name: 'Guillaume Lambert',
  //     email: 'guillaume.p.lambert@gmail.com',
  //     external_urls: { spotify: 'https://open.spotify.com/user/119653572' },
  //     followers: { href: null, total: 17 },
  //     href: 'https://api.spotify.com/v1/users/119653572',
  //     id: '119653572',
  //     images: [
  //       {
  //         height: null,
  //         url:
  //           'https://scontent.xx.fbcdn.net/v/t1.0-1/c66.46.576.576a/s200x200/579855_10200293885962843_1072296619_n.jpg?_nc_cat=101&_nc_ht=scontent.xx&oh=f566d1328fe09b4dde27a38f0479b856&oe=5CB085FE',
  //         width: null
  //       }
  //     ],
  //     product: 'premium',
  //     type: 'user',
  //     uri: 'spotify:user:119653572'
  //   },
  //   isConnected: true,
  //   spotifyApiToken: null
  // };

  constructor() {
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(user, token) {
    this.setState({ isConnected: true, user: user, spotifyApiToken: token });
  }
  logout() {
    this.setState({
      isConnected: false,
      user: undefined,
      spotifyApiToken: undefined,
    });
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isConnected: this.state.isConnected,
          user: this.state.user,
          spotifyApiToken: this.state.spotifyApiToken,
          login: this.login,
          logout: this.logout,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer, AuthContext };
