import React, { CSSProperties, ReactElement } from 'react';
import classes from './Home.module.scss';

interface CustomCSSProperties extends React.CSSProperties {
  '--i'?: number;
}

type Props = {};

export function Home({}: Props): ReactElement {
  return (
    <div className={classes['wrapper']}>
      <div className={classes['content']}>
        <div className={classes['description']}></div>
        <div className="flex items-end">
          <img
            className={classes['person']}
            src="https://wp.quomodosoft.com/growth/wp-content/uploads/2019/10/hero_1.png"
            alt=""
          />
        </div>
      </div>

      <div className={classes['bubbles']}>
        <span style={{ '--i': 1 } as CustomCSSProperties}></span>
        <span style={{ '--i': 11 } as CustomCSSProperties}></span>
        <span style={{ '--i': 12 } as CustomCSSProperties}></span>
        <span style={{ '--i': 15 } as CustomCSSProperties}></span>
        <span style={{ '--i': 27 } as CustomCSSProperties}></span>
        <span style={{ '--i': 13 } as CustomCSSProperties}></span>
        <span style={{ '--i': 38 } as CustomCSSProperties}></span>
        <span style={{ '--i': 42 } as CustomCSSProperties}></span>
        <span style={{ '--i': 55 } as CustomCSSProperties}></span>
        <span style={{ '--i': 60 } as CustomCSSProperties}></span>
        <span style={{ '--i': 19 } as CustomCSSProperties}></span>
        <span style={{ '--i': 10 } as CustomCSSProperties}></span>
        <span style={{ '--i': 9 } as CustomCSSProperties}></span>
        <span style={{ '--i': 6 } as CustomCSSProperties}></span>
        <span style={{ '--i': 1 } as CustomCSSProperties}></span>
        <span style={{ '--i': 11 } as CustomCSSProperties}></span>
        <span style={{ '--i': 12 } as CustomCSSProperties}></span>
        <span style={{ '--i': 15 } as CustomCSSProperties}></span>
        <span style={{ '--i': 27 } as CustomCSSProperties}></span>
        <span style={{ '--i': 13 } as CustomCSSProperties}></span>
        <span style={{ '--i': 38 } as CustomCSSProperties}></span>
        <span style={{ '--i': 42 } as CustomCSSProperties}></span>
        <span style={{ '--i': 55 } as CustomCSSProperties}></span>
        <span style={{ '--i': 60 } as CustomCSSProperties}></span>
        <span style={{ '--i': 19 } as CustomCSSProperties}></span>
        <span style={{ '--i': 10 } as CustomCSSProperties}></span>
        <span style={{ '--i': 9 } as CustomCSSProperties}></span>
        <span style={{ '--i': 6 } as CustomCSSProperties}></span>
        <span style={{ '--i': 15 } as CustomCSSProperties}></span>
        <span style={{ '--i': 27 } as CustomCSSProperties}></span>
        <span style={{ '--i': 13 } as CustomCSSProperties}></span>
        <span style={{ '--i': 38 } as CustomCSSProperties}></span>
        <span style={{ '--i': 42 } as CustomCSSProperties}></span>
        <span style={{ '--i': 55 } as CustomCSSProperties}></span>
        <span style={{ '--i': 60 } as CustomCSSProperties}></span>
        <span style={{ '--i': 19 } as CustomCSSProperties}></span>
        <span style={{ '--i': 10 } as CustomCSSProperties}></span>
        <span style={{ '--i': 9 } as CustomCSSProperties}></span>
        <span style={{ '--i': 6 } as CustomCSSProperties}></span>
      </div>
    </div>
  );
}
