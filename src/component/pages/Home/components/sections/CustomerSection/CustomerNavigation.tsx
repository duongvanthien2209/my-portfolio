import React, { ReactElement } from 'react';
import { useSwiper } from 'swiper/react';
import classes from './CustomerSection.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import classNames from 'classnames';

export function CustomerNavigation(): ReactElement {
  const swiper = useSwiper();

  return (
    <div className="flex space-x-4">
      <button className={classNames(classes['btn'], classes['prev-btn'])} onClick={() => swiper.slidePrev()}>
        <FontAwesomeIcon icon={solid('left-long')} />
      </button>
      <button className={classNames(classes['btn'], classes['next-btn'])} onClick={() => swiper.slideNext()}>
        <FontAwesomeIcon icon={solid('right-long')} />
      </button>
    </div>
  );
}
