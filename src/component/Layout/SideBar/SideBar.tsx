import React, { ReactElement } from 'react';
import { SideBarItemType } from '../../../types';
import classes from './SideBar.module.scss';
import { SideBarItem } from './SideBarItem';
import classNames from 'classnames';

type Props = {
  expaned: boolean;
};

export function SideBar({ expaned = false }: Props): ReactElement {
  const sideBarMenu: SideBarItemType[] = [
    {
      title: 'Smart Items',
      isHaveSubMenu: true,
      subMenu: [
        {
          title: 'Headphone',
          isHaveSubMenu: true,
          subMenu: [{ title: 'Speaker' }, { title: 'Laptop' }, { title: 'Tablet' }],
        },
        {
          title: 'Mobile & Tablet',
          isHaveSubMenu: true,
          subMenu: [{ title: 'Camera' }, { title: 'Android Tv' }, { title: 'Mobile' }],
        },
        {
          title: 'Computer & Laptop',
          isHaveSubMenu: true,
          subMenu: [{ title: 'Home Theater' }, { title: 'Cell Phones' }, { title: 'Eye-wear' }],
        },
      ],
    },
    {
      title: 'Smart Watches',
    },
    {
      title: 'IPad Accessories',
    },
    {
      title: 'Microphone',
    },
    {
      title: 'Wireless Printer',
    },
    {
      title: 'Video Game',
    },
    {
      title: 'Polaroid Camera',
    },
    {
      title: 'Air Purifier',
    },
    {
      title: 'Control Speakers',
    },
    {
      title: 'Headset',
    },
  ];

  return (
    <div className={classNames(classes['side-bar'], !expaned && classes['collapsed'])}>
      {sideBarMenu.map((item, index) => (
        <SideBarItem key={index} item={item} isHaveSubMenu={item?.isHaveSubMenu} subMenu={item?.subMenu ?? []} />
      ))}
    </div>
  );
}
