import React, { ReactElement } from 'react';
import classes from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export function RightMenu(): ReactElement {
  const menuItems = [
    {
      icon: <FontAwesomeIcon icon={regular('user')} className={classes['icon']} size="xl" />,
      title: 'Account',
    },
    {
      icon: <FontAwesomeIcon icon={regular('heart')} className={classes['icon']} size="xl" />,
      title: 'Wishlist',
      quantity: 0,
    },
    {
      icon: <FontAwesomeIcon icon={solid('code-compare')} className={classes['icon']} size="xl" />,
      title: 'Compare',
      quantity: 10,
    },
    {
      icon: <FontAwesomeIcon icon={solid('cart-shopping')} className={classes['icon']} size="xl" />,
      title: 'My Cart',
      quantity: 99,
    },
  ];

  return (
    <div className={classes['right-menu']}>
      {menuItems.map((item, index) => (
        <div className={classes['menu-item']} key={index}>
          {item.icon}
          <span className={classes['title']}>{item.title}</span>
          {typeof item.quantity === 'number' && (
            <div className={classes['quantity']}>
              <span>{item.quantity}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
