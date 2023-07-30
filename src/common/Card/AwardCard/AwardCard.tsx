import React, { ReactElement } from 'react';
import classes from './AwardCard.module.scss';

export type AwardCardProps = {
  img: string;
  title: string;
  description: string;
};

export function AwardCard({ img, title, description }: AwardCardProps): ReactElement {
  return (
    <div className={classes['award-card']}>
      <div className="flex items-center">
        <img className="w-[250px] h-auto" src={img} alt="" />
      </div>

      <div className={classes['content']}>
        <p className="mb-6">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
