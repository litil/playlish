import React, { FunctionComponent, ReactNode } from 'react';

interface IAuthContextState {
  user: IUser | undefined;
  isConnected: boolean;
  spotifyApiToken: string | undefined;
  login?: (user: IUser | undefined, token: string) => void;
  logout?: () => void;
}

const accessTokenFromLS = localStorage.getItem('accessToken') || undefined;
const userFromLS = localStorage.getItem('user') || undefined;
const parsedUserFromLS = userFromLS ? JSON.parse(userFromLS) : undefined;

const initialState: IAuthContextState = {
  user: parsedUserFromLS,
  isConnected: !!accessTokenFromLS && !!parsedUserFromLS,
  spotifyApiToken: accessTokenFromLS
};

const AuthContext = React.createContext(initialState);

interface IAuthProviderProps {
  children: ReactNode[];
}

const AuthProvider: FunctionComponent<IAuthProviderProps> = children => {
  /**
   * The state will looks like:
   <pre>
    state = {
      user: {
        country: 'FR',
        display_name: 'Guillaume Lambert',
        email: 'guillaume.p.lambert@gmail.com',
        external_urls: { spotify: 'https://open.spotify.com/user/119653572' },
        followers: { href: null, total: 17 },
        href: 'https://api.spotify.com/v1/users/119653572',
        id: '119653572',
        images: [
          {
            height: null,
            url:
              'https://scontent.xx.fbcdn.net/v/t1.0-1/c66.46.576.576a/s200x200/579855_10200293885962843_1072296619_n.jpg?_nc_cat=101&_nc_ht=scontent.xx&oh=f566d1328fe09b4dde27a38f0479b856&oe=5CB085FE',
            width: null
          }
        ],
        product: 'premium',
        type: 'user',
        uri: 'spotify:user:119653572'
      },
      isConnected: true,
      spotifyApiToken: null
    };
   </pre>
   */
  const [state, updateState] = React.useState(initialState);

  const login = (user: IUser | undefined, token: string) => {
    updateState({ isConnected: true, user: user, spotifyApiToken: token });

    // save the token to the local storage
    localStorage.setItem('accessToken', token);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logout = () => {
    updateState({
      isConnected: false,
      user: undefined,
      spotifyApiToken: undefined
    });
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider
      value={{
        isConnected: state.isConnected,
        user: state.user,
        spotifyApiToken: state.spotifyApiToken,
        login,
        logout
      }}
    >
      {children.children}
    </AuthContext.Provider>
  );
};
const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer, AuthContext };
