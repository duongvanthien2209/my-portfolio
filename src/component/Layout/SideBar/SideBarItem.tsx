import React, { ReactElement } from 'react';
import classes from './SideBar.module.scss';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SubMenu } from './SubMenu';
import { SideBarItemType } from '../../../types';

type Props = {
  item: any;
  isHaveSubMenu?: boolean;
  subMenu?: SideBarItemType[];
};

export function SideBarItem({ item, isHaveSubMenu, subMenu }: Props): ReactElement {
  return (
    <div className={classes['side-bar-item']}>
      <span>{item.title}</span>

      {isHaveSubMenu && <FontAwesomeIcon className={classes['side-bar-icon']} icon={solid('chevron-right')} />}
      {subMenu && subMenu.length > 0 && <SubMenu className={classes['sub-menu']} subMenu={subMenu} />}
    </div>
  );
}
