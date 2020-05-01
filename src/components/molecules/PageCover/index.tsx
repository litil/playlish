import React, { FunctionComponent } from 'react';
import './styles.css';

interface IPageCoverProps {
  title: string;
  src: string;
  alt: string;
}

export const PageCover: FunctionComponent<IPageCoverProps> = ({
  title,
  src,
  alt,
}) => {
  return (
    <div className="PageCover-imgContainer">
      <div className="PageCover-innerImgContainer">
        <img src={src} alt={alt} />
      </div>
      <h1>{title}</h1>
    </div>
  );
};
