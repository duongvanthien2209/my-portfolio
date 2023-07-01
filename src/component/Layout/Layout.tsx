import React, { ReactElement, useState } from 'react';
import { Header } from './Header';
import classes from './Layout.module.scss';
import { SideBar } from './SideBar';

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props): ReactElement {
  const [expaned, setExpaned] = useState(false);

  return (
    <>
      <Header expaned={expaned} setExpanded={setExpaned} />

      <div className={classes['body']}>
        <div>
          <SideBar expaned={expaned} />
        </div>

        <div>{children}</div>
      </div>
    </>
  );
}
