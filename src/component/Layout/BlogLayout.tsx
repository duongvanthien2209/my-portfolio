import React, { ReactElement, useMemo } from 'react';
import classes from './BlogLayout.module.scss';
import { Outlet, useLocation } from 'react-router-dom';

type Props = {};

export function BlogLayout({}: Props): ReactElement {
  const location = useLocation();

  const titleObj = useMemo(() => {
    if (location.pathname.includes('class-grid')) {
      return {
        title: 'Classic Grid',
        description: 'Personal Portfolio theme',
      };
    }

    if (location.pathname.includes('left-sidebar')) {
      return {
        title: 'Left Sidebar',
        description: 'Personal Portfolio theme',
      };
    }

    if (location.pathname.includes('post-timeline')) {
      return {
        title: 'Post Timeline',
        description: 'Personal Portfolio theme',
      };
    }

    return undefined;
  }, [location.pathname]);

  return (
    <>
      <div className={classes['sub-title']}>
        <div className={classes['background-overlay']}></div>
        <div className="container relative z-3">
          <div className={classes['title']}>
            <h3 className="text-4xl">{titleObj?.title ?? ''}</h3>
            <p>{titleObj?.description ?? ''}</p>
          </div>
        </div>
      </div>

      <div>
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
}
