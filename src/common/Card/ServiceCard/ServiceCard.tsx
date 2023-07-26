import React, { ReactElement } from 'react';
import classes from './ServiceCard.module.scss';

export type ServiceCardProps = {
  img: string;
  title: string;
  description: string;
};

export function ServiceCard({ img, title, description }: ServiceCardProps): ReactElement {
  return (
    <div className={classes['service-card']}>
      <img src={img} alt="" />
      <div className={classes['content']}>
        <p>{title}</p>
        <span>{description}</span>
      </div>
    </div>
  );
}
