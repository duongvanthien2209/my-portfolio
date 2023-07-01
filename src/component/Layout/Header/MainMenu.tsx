import React, { ReactElement } from 'react';
import classes from './Header.module.scss';

export function MainMenu(): ReactElement {
  const menuItems = [
    { title: 'Home' },
    { title: 'Catalog' },
    { title: 'Contact' },
    { title: 'Offer' },
    { title: 'Blog' },
  ];

  return (
    <div className={classes['main-menu']}>
      {menuItems.map((item, index) => (
        <div className={classes['main-menu-item']} key={index}>
          <span>{item.title}</span>
        </div>
      ))}
    </div>
  );
}
