import React, { ReactElement } from 'react';
import classes from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';

export function MainMenu(): ReactElement {
  const menuItems = [
    { title: 'Home', link: '' },
    { title: 'Price', link: '/price' },
    { title: 'Shop', link: '/shop' },
    { title: 'Blog', link: '/blog' },
    { title: 'Contact', link: '/contact' },
  ];

  return (
    <div className={classes['main-menu']}>
      {menuItems.map((item, index) => (
        <div className={classes['main-menu-item']} key={index}>
          <NavLink className={({ isActive }) => classNames(isActive && classes['active'])} to={item.link}>
            {item.title}
          </NavLink>
        </div>
      ))}
    </div>
  );
}
