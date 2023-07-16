import React, { ReactElement } from 'react';
import classes from './PersonalCard.module.scss';

export type PersonalCardProps = {
  avatar: string;
  name: string;
  jobTitle: string;
  description: string;
};

export function PersonalCard({ avatar, name, jobTitle, description }: PersonalCardProps): ReactElement {
  return (
    <div className={classes['personal-card']}>
      <div className={classes['avatar']}>
        <img src={avatar} alt="" />
        <div className={classes['content']}>
          <p>{name}</p>
          <span>{jobTitle}</span>
        </div>
      </div>
      <p className={classes['description']}>{description}</p>
    </div>
  );
}
