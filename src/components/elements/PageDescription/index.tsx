import React, { FunctionComponent, ReactNode } from 'react';
import './styles.css';

interface IPageDescriptionProps {
  children?: ReactNode;
}

export const PageDescription: FunctionComponent<IPageDescriptionProps> = ({
  children,
}) => {
  return <>{children}</>;
};
