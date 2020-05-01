import React, { FunctionComponent, ReactNode } from 'react';
import './styles.css';

interface IStatsContainerProps {
  children: ReactNode;
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
