import React, { ReactElement } from 'react';
import classes from './ArticleCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { ExtendableComponentProps } from '../../overrideableComponent';
import classNames from 'classnames';

export type ArticleCardProps = ExtendableComponentProps<
  'div',
  {
    dateCreate: string;
    title: string;
    description: string;
    img: string;
  }
>;

export function ArticleCard({ className, dateCreate, title, description, img }: ArticleCardProps): ReactElement {
  return (
    <div className={classNames('w-full', className)}>
      <img className="rounded-lg w-full h-auto" src={img} alt="" />

      <div className="mt-6">
        <span className="text-textPrimary ds-text-body-small">
          <FontAwesomeIcon icon={regular('clock')} /> {dateCreate}
        </span>
        <h3 className="text-3xl font-semibold text-white hover:text-textPrimary my-6">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
}
