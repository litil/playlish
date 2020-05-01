import React, { FunctionComponent } from 'react';
import { Input } from '../../elements';
import './styles.css';

interface IPageCoverWithInputProps {
  placeholder?: string;
  value?: string;
  src: string;
  alt: string;
  onChangeFn: () => void;
}

export const PageCoverWithInput: FunctionComponent<IPageCoverWithInputProps> = ({
  placeholder,
  value,
  src,
  alt,
  onChangeFn,
}) => {
  return (
    <div className="PageCoverWithInput-imgContainer">
      <div className="PageCoverWithInput-innerImgContainer">
        <img src={src} alt={alt} />
      </div>
      <div className="PageCoverWithInput-inputContainer">
        <Input
          placeholder={placeholder}
          value={value}
          onChangeFn={onChangeFn}
          styles={{ border: 'none' }}
        />
      </div>
    </div>
  );
};
