import React, { ReactElement } from 'react';
import classes from './SubMenu.module.scss';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SubMenu } from './SubMenu';
import { SideBarItemType } from '../../../../types';

type Props = {
  item: any;
  isHaveSubMenu?: boolean;
  subMenu?: SideBarItemType[];
};

export function SubMenuItem({ item, isHaveSubMenu, subMenu }: Props): ReactElement {
  return (
    <div className={classes['sub-menu-item']}>
      <span>{item.title}</span>

      {isHaveSubMenu && <FontAwesomeIcon className={classes['sub-menu-icon']} icon={solid('chevron-right')} />}
      {subMenu && subMenu.length > 0 && <SubMenu subMenu={subMenu ?? []} />}
    </div>
  );
}
