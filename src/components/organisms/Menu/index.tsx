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
    <div>
      <AuthConsumer>
        {({ isConnected, user }) => (
          <div>
            {isConnected && user ? (
              <>
                <div>
                  <MenuHeader />
                  <MenuUserCard />
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
