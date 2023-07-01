import React, { ReactElement, useState } from 'react';
import classes from './Header.module.scss';
import { RightMenu } from './RightMenu';
import { MainMenu } from './MainMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

type Props = {};

export function Header({}: Props): ReactElement {
  return (
    <div className={classes['header']}>
      {/*<FontAwesomeIcon icon={solid('bars')} />*/}
      Header
    </div>
  );
}
