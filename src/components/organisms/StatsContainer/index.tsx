import React, { FunctionComponent, ReactNode } from 'react';

interface IStatsContainerProps {
  children: ReactNode;
}

export const StatsContainer: FunctionComponent<IStatsContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-row justify-start w-full">
      <div
        className="
        flex flex-row
        items-cent
        w-full
        border-customBlue-300 border-b
        mx-24 pb-3"
      >
        {children}
      </div>
    </div>
  );
};
