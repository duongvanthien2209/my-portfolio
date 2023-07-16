import React, { ReactElement, useState } from 'react';
import classes from './Header.module.scss';
import { RightMenu } from './RightMenu';
import { MainMenu } from './MainMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import { Button } from '../../../common';

type Props = {};

export function Header({}: Props): ReactElement {
  return (
    <div className={classes['header']}>
      {/*<FontAwesomeIcon icon={solid('bars')} />*/}
      <h2 className={classes['brand']}>
        <Link to="/">
          <img src="https://wp.quomodosoft.com/growth/wp-content/uploads/2019/09/logo-3.png" alt="" />
        </Link>
      </h2>

      <div className="flex items-center">
        <MainMenu />
        <Button className="mx-[10px]">Let's chat</Button>
      </div>
    </div>
  );
}
