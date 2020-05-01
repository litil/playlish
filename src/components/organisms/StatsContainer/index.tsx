import React, { FunctionComponent, ReactElement } from 'react';
import './styles.css';

interface IStatsContainerProps {
  children: ReactElement;
}

export const StatsContainer: FunctionComponent<IStatsContainerProps> = ({
  children,
}) => {
  return (
    <div className="StatsContainer-container">
      <div className="StatsContainer-innerContainer">{children}</div>
    </div>
  );
};
