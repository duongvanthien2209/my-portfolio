import React, { ReactElement, useState } from 'react';
import classes from './Header.module.scss';
import { RightMenu } from './RightMenu';
import { MainMenu } from './MainMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import { Button } from '../../../common';
import classNames from 'classnames';

type Props = {};

export function Header({}: Props): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes['header']}>
      <div className="relative z-10 flex justify-between items-center py-9 bg-primary lg:bg-transparent px-[15px] lg:px-0">
        <h2 className={classes['brand']}>
          <Link to="/">
            <img src="https://wp.quomodosoft.com/growth/wp-content/uploads/2019/09/logo-3.png" alt="" />
          </Link>
        </h2>

        <div className="flex items-center">
          <MainMenu type="normal" className="mdDown:!hidden" />
          <Button className="mx-[10px]">Let's chat</Button>
          <button className="text-textPrimary h-6 w-6 lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FontAwesomeIcon icon={solid('xmark')} /> : <FontAwesomeIcon icon={solid('bars')} />}
          </button>
        </div>
      </div>

      <MainMenu type="small" className={classNames(isOpen && classes['open'])} />
    </div>
  );
}
