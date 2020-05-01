import React, { FunctionComponent } from 'react';
import './styles.css';

interface IInputProps {
  value?: string;
  placeholder?: string;
  onChangeFn: () => void;
  styles?: object;
}

export const Input: FunctionComponent<IInputProps> = ({
  value,
  placeholder,
  onChangeFn,
  styles,
}) => {
  return (
    <input
      value={value}
      onChange={onChangeFn}
      placeholder={placeholder}
      style={styles}
    />
  );
};
