// @ts-ignore-file
import React, { FunctionComponent } from 'react';
import { AuthConsumer } from '../../../contexts/AuthContext';
import './styles.css';

interface IMenuUserCardProps {
  styles?: object;
}

export const MenuUserCard: FunctionComponent<IMenuUserCardProps> = ({
  styles,
}) => {
  return (
    <AuthConsumer>
      {({ isConnected, user }) => {
        if (!user || !isConnected) {
          return <></>;
        }

        // @ts-ignore-start
        return (
          <div className="MenuUserCard-container" style={styles}>
            <img src={user.images[0].url} alt={user.display_name} />
            <span className="MenuUserCard-name">{user.display_name}</span>
            <span className="MenuUserCard-country">{user.country}</span>
            <div className="MenuUserCard-stats">
              <div className="MenuUserCard-statItem">
                <span className="MenuUserCard-statValue">{user.product}</span>
                <span className="MenuUserCard-statLabel">Subscription</span>
              </div>
              <div className="MenuUserCard-statItem">
                <span className="MenuUserCard-statValue">
                  {user.followers.total}
                </span>
                <span className="MenuUserCard-statLabel">Fans</span>
              </div>
            </div>
          </div>
        );
        // @ts-ignore-end
      }}
    </AuthConsumer>
  );
};
