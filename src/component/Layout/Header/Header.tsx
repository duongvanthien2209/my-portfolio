import React, { ReactElement, useState } from 'react';
import classes from './Header.module.scss';
import { RightMenu } from './RightMenu';
import { MainMenu } from './MainMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

type Props = {
  expaned: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

export function Header({ expaned, setExpanded }: Props): ReactElement {
  return (
    <div className={classes['header']}>
      <div className={classes['top-header']}>
        <p>Limited-Time Offers : Mid-Summer Season Sale On Selected Items</p>
      </div>
      <div className={classes['main-header']}>
        <img src="//cdn.shopify.com/s/files/1/0646/5051/0575/files/logo_240x.png?v=1654170133" alt="" />
        <div className={classes['search-form']}>
          <input className={classes['search-input']} type="text" placeholder="Search Product Here" />
          <button className={classes['search-btn']}>Search</button>
        </div>
        <RightMenu />
      </div>
      <div className={classes['bottom-header']}>
        <div className="flex">
          <button className={classes['categories-btn']} onClick={() => setExpanded((currentState) => !currentState)}>
            <div className="space-x-2">
              <FontAwesomeIcon icon={solid('bars')} />
              <span>Shop by categories</span>
            </div>
            {expaned ? <FontAwesomeIcon icon={solid('angle-down')} /> : <FontAwesomeIcon icon={solid('angle-up')} />}
          </button>
          <MainMenu />
        </div>
        <span className={classes['contact']}>Need Help? (+91) 0123-456-789</span>
      </div>
    </div>
  );
}
