import React, { FunctionComponent } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { AuthConsumer } from '../../../contexts/AuthContext';
import { MenuSeparator } from '../../elements';
import {
  MenuFollow,
  MenuFooter,
  MenuHeader,
  MenuNavigation,
  MenuUserCard,
} from '../../molecules';
import './styles.css';

interface IMenuProps {}

const MenuComponent: FunctionComponent<IMenuProps> = () => {
  return (
    <div className="Menu-container">
      <AuthConsumer>
        {({ isConnected, user }) => (
          <div className="Menu-innerContainer">
            {isConnected && user ? (
              <>
                <div className="MenuUpper-container">
                  <MenuHeader styles={{ marginTop: '32px' }} />
                  <MenuUserCard styles={{ marginTop: '64px' }} />
                  <MenuSeparator />
                  <MenuNavigation />
                  <MenuSeparator />
                  <MenuFollow />
                  <MenuFooter styles={{ marginBottom: '8px' }} />
                </div>
              </>
            ) : (
              <Redirect to="/" />
            )}
          </div>
        )}
      </AuthConsumer>
    </div>
  );
};

export const Menu = withRouter(MenuComponent);
