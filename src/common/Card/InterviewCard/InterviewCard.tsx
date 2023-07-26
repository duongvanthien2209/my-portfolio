import React, { ReactElement } from 'react';
import { Button } from '../../Button';
import classes from './InterviewCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export type InterviewCardProps = {
  img: string;
  title: string;
  description: string;
};

export function InterviewCard({ img, title, description }: InterviewCardProps): ReactElement {
  return (
    <div className={classes['interview-card']}>
      <div className={classes['img']} style={{ backgroundImage: `url(${img})` }}></div>

      <div className={classes['content']}>
        <p>{title}</p>
        <p>{description}</p>
        <button className={classes['btn']}>
          <span className="ds-text-body-small text-textPrimary uppercase">See More</span>
          <FontAwesomeIcon icon={solid('arrow-right-long')} />
        </button>
      </div>
    </div>
  );
}
