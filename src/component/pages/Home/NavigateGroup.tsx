import React, { ReactElement } from 'react';
import { useSwiper } from 'swiper/react';
import classes from './NavigateGroup.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export function NavigateGroup(): ReactElement {
  const swiper = useSwiper();

  return (
    <div className={classes['navigate-group']}>
      <h6>Seller Listings</h6>

      <div className="flex space-x-4">
        <button className={classes['prev-btn']} onClick={() => swiper.slidePrev()}>
          <FontAwesomeIcon icon={solid('chevron-left')} />
        </button>
        <button className={classes['next-btn']} onClick={() => swiper.slideNext()}>
          <FontAwesomeIcon icon={solid('chevron-right')} />
        </button>
      </div>
    </div>
  );
}
