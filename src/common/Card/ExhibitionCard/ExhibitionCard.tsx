import React, { ReactElement } from 'react';
import classes from './ExhibitionCard.module.scss';

export type ExhibitionCardProps = {
  img: string;
  title: string;
};

export function ExhibitionCard({ img, title }: ExhibitionCardProps): ReactElement {
  return (
    <div className={classes['exhibition-card']}>
      <img src={img} alt="" />
      <div className={classes['background']}></div>
      <div className={classes['content']}>
        <p className="text-xl text-white text-center">{title}</p>
      </div>
    </div>
  );
}
