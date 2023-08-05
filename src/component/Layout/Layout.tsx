import React, { ReactElement, useState } from 'react';
import { Header } from './Header';
import classes from './Layout.module.scss';
import { SideBar } from './SideBar';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';

export function Layout(): ReactElement {
  return (
    <div className={classes['layout']}>
      <div className="relative lg:absolute z-[999] top-0 left-0 w-full">
        <Header />
      </div>

      <div className={classes['body']}>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
