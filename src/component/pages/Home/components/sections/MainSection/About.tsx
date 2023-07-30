import React, { ReactElement } from 'react';
import classes from './About.module.scss';
import { Button } from '../../../../../../common';

type Props = {};

export function About({}: Props): ReactElement {
  return (
    <div className={classes['about']}>
      <div className={classes['about-img']}>
        <img src="https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/about-pic.png" alt="" />
      </div>
      <div className={classes['content']}>
        <div>
          <span>About me</span>
          <h2 className={classes['question']}>Why hire me for your next project?</h2>
        </div>
        <p className={classes['description']}>
          I am an experienced full-stack web developer with a strong proficiency in{' '}
          <span className="text-textPrimary">JavaScript</span> and <span className="text-textPrimary">Typescript</span>.
          My expertise extends to front-end frameworks such as <span className="text-textPrimary">ReactJS</span> and{' '}
          <span className="text-textPrimary">NextJS</span>. On the back end, I am well-versed in working with{' '}
          <span className="text-textPrimary">NodeJS</span> and <span className="text-textPrimary">NestJS</span>{' '}
          framework, leveraging <span className="text-textPrimary">RESTful API</span>. Additionally, I have
          comprehensive knowledge of various databases, including SQL and non-SQL like{' '}
          <span className="text-textPrimary">MongoDB</span> and <span className="text-textPrimary">MySQL</span>.
        </p>
        <Button className="mt-6">Learn More</Button>
      </div>
    </div>
  );
}
