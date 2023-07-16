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
          Meet my startup design agency Shape Rex Currently I am working at CodeNext as Product Designer. Before that
          I’ve worked at SpurBee, Dhaka as a UX, UI Designer. I love to work in User Experience & User Interface
          designing. Because I love to solve the design problem and find easy and better solutions to solve it. I always
          try my best to make good user interface with the best user experience. I have been working as a Visual
          designer from.
        </p>
        <Button>Learn More</Button>
      </div>
    </div>
  );
}
