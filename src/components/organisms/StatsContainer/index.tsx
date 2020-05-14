import React, { FunctionComponent, ReactNode } from 'react';

interface IStatsContainerProps {
  children: ReactNode;
}

export const StatsContainer: FunctionComponent<IStatsContainerProps> = ({ children }) => {
  return (
    <div
      className="flex 
      flex-col md:flex-row justify-start md:w-full"
    >
      <div
        className="
        flex flex-col md:flex-row
        items-center
        justify-center md:justify-start
        w-full
        border-customBlue-300 border-b
        md:mx-24 pb-3"
      >
        {children}
      </div>
    </div>
  );
};
