import React, { FunctionComponent } from 'react';
import './styles.css';

interface IMenuFooterProps {
  styles: object;
}

export const MenuFooter: FunctionComponent<IMenuFooterProps> = ({ styles }) => {
  // const linkToBuyMeACoffee = () => {
  //   window.open('https://www.buymeacoffee.com/3z7CnoJ');
  // };

  return (
    <div className="MenuFooter-container" style={styles}>
      <span>© 2020, Scriptaculaire</span>
      {/* <div className="MenuFooter-linkContainer">
          <span>You love it? Buy me a </span>
          <SocialIcon
            icon={<FaCoffee />}
            onClickFn={linkToBuyMeACoffee}
            styles={{ margin: "4px 0px 0px 4px" }}
          />
        </div> */}
    </div>
  );
};
