import React, { ReactElement, ReactNode } from 'react';
import classes from './ServiceCard.module.scss';

export type ServiceCardProps = {
  img: string;
  title: string;
  description: ReactNode;
};

export function ServiceCard({ img, title, description }: ServiceCardProps): ReactElement {
  function renderDescription() {
    if (typeof description === 'string') return <span>{description}</span>;

    return description;
  }

  return (
    <div className={classes['service-card']}>
      <img src={img} alt="" />
      <div className={classes['content']}>
        <p>{title}</p>
        {renderDescription()}
      </div>
    </div>
  );
}
