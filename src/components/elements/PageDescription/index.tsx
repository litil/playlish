import { FunctionComponent, ReactElement } from 'react';
import './styles.css';

interface IPageDescriptionProps {
  children: ReactElement;
}

export const PageDescription: FunctionComponent<IPageDescriptionProps> = ({
  children,
}) => {
  return children;
};
