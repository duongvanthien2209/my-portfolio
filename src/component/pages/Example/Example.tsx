import React, { ReactElement } from 'react';
import classes from './Example.module.scss';

import img1 from '../../../assets/websites/screencapture-woodmart-xtemos-home-2023-06-28-20_38_41.png';
import img2 from '../../../assets/websites/screencapture-flatsome3-uxthemes-demos-shop-demos-classic-shop-2023-06-28-20_37_48.png';

// Icons
import img3 from '../../../assets/icons/nodejs.png';
import img4 from '../../../assets/icons/react.png';
import img5 from '../../../assets/icons/typescript.png';
import img6 from '../../../assets/icons/html-5.png';
import img7 from '../../../assets/icons/css.png';
import img8 from '../../../assets/icons/sass.png';
import img9 from '../../../assets/icons/database.png';

// Text
import img10 from '../../../assets/icons/pngwing.com.png';

// Images
import img11 from '../../../assets/images/thien.jpg';

type Props = {};

export function Example({}: Props): ReactElement {
  return (
    <div className={classes['design']}>
      <img className={classes['img1']} src={img1} alt="" />
      <img className={classes['img2']} src={img2} alt="" />
      <div className={classes['background']}></div>
      <div className={classes['banner']}>
        <span>
          Looking for
          <br />a full-stack developer
        </span>
      </div>
      <div className={classes['title']}>
        <div className="relative w-[700px]">
          <img src={img10} alt="" />
          <span>
            I guarantee to give you
            <br />
            the best service
          </span>
        </div>
      </div>
      <div className={classes['person']}></div>
      <div className={classes['icons']}>
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
        <img src={img9} alt="" />
      </div>
    </div>
  );
}
