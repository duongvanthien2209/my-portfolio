import React, { ReactElement } from 'react';

export type ProgressBarProps = {
  title: string;
  percent: number;
};

export function ProgressBar({ title, percent }: ProgressBarProps): ReactElement {
  return (
    <div>
      <div className="flex justify-between mb-[20px]">
        <p className="uppercase text-white">{title}</p>
        <span className="text-textPrimary">{percent}%</span>
      </div>
      <div className="relative h-[5px] rounded-[50px] bg-[#1f2235]">
        <div
          className="absolute z-3 top-0 left-0 h-full rounded-[50px] bg-textPrimary"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
