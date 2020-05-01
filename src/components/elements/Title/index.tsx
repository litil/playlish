import React, { FunctionComponent } from 'react';
import './styles.css';

interface ITitleProps {
  text: string;
}

export const Title: FunctionComponent<ITitleProps> = ({ text }) => {
  return <h1 className="Title-h1">{text}</h1>;
};
