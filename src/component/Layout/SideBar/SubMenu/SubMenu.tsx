import React, { ReactElement } from 'react';
import classes from './SubMenu.module.scss';
import { SubMenuItem } from './SubMenuItem';
import { SideBarItemType } from '../../../../types';
import { ExtendableComponentProps } from '../../../../common';
import classNames from 'classnames';

type Props = ExtendableComponentProps<
  'div',
  {
    subMenu: SideBarItemType[];
  }
>;

export function SubMenu({ subMenu, className }: Props): ReactElement {
  return (
    <div className={classNames(classes['sub-menu'], className)}>
      {subMenu.map((item, index) => (
        <SubMenuItem
          key={index}
          item={item}
          isHaveSubMenu={item.subMenu && item.subMenu.length > 0}
          subMenu={item.subMenu}
        />
      ))}
    </div>
  );
}
