import React, { ReactElement } from 'react';
import classes from './ProjectCard.module.scss';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';

export type ProjectCardProps = {
  tag: string;
  title: string;
  description: string;
  image: string;
};

export function ProjectCard({ tag, title, description, image }: ProjectCardProps): ReactElement {
  return (
    <div className={classes['project-card']}>
      <div className={classes['img']}>
        <img src={image} alt="" />
      </div>
      <div className={classes['content']}>
        <span className={classes['tags']}>{tag}</span>
        <h3 className={classes['title']}>{title}</h3>
        <p className={classes['description']}>{description}</p>
        <Link className={classes['btn']} to="/project">
          Read More
        </Link>
      </div>
    </div>
  );
}
