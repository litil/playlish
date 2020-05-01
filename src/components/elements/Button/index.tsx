import React, { FunctionComponent } from 'react';
import './styles.css';

interface IButtonProps {
  size?: string;
  text: string;
  onClickFn: React.MouseEventHandler;
  disabled?: boolean;
  styles?: object;
}

export const Button: FunctionComponent<IButtonProps> = ({
  size = 'small',
  text,
  onClickFn,
  disabled = false,
  styles,
}) => {
  return (
    <button
      onClick={onClickFn}
      className={`button-${size}`}
      style={styles}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
