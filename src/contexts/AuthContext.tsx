import React, { FunctionComponent, ReactNode } from 'react';

interface IAuthContextState {
  user: IUser | undefined;
  isConnected: boolean;
  spotifyApiToken: string | undefined;
  login?: (user: IUser | undefined, token: string) => void;
  logout?: () => void;
}

const initialState: IAuthContextState = {
  user: undefined,
  isConnected: false,
  spotifyApiToken: undefined,
};

const AuthContext = React.createContext(initialState);

interface IAuthProviderProps {
  children: ReactNode[];
}

const AuthProvider: FunctionComponent<IAuthProviderProps> = (children) => {
  const [state, updateState] = React.useState(initialState);
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

  const login = (user: IUser | undefined, token: string) => {
    updateState({ isConnected: true, user: user, spotifyApiToken: token });
  };

  const logout = () => {
    updateState({
      isConnected: false,
      user: undefined,
      spotifyApiToken: undefined,
    });
  };

  console.log(children);

  return (
    <AuthContext.Provider
      value={{
        isConnected: state.isConnected,
        user: state.user,
        spotifyApiToken: state.spotifyApiToken,
        login,
        logout,
      }}
    >
      {children.children}
    </AuthContext.Provider>
  );
};
const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer, AuthContext };