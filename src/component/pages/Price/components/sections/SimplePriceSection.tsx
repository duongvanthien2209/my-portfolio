import React, { ReactElement } from 'react';
import classes from './SimplePriceSection.module.scss';
import { PriceOptionCard, PriceOptionCardProps } from '../../../../../common/Card/PriceOptionCard';
import { PriceOptionType } from '../../../../../constants';

type Props = {};

export function SimplePriceSection({}: Props): ReactElement {
  const priceOptions: PriceOptionCardProps[] = [
    {
      type: PriceOptionType.BASIC,
      details: ['Lifetime Usage', '3 Months Support & Updates', '1 Website License'],
      price: 199,
    },
    {
      type: PriceOptionType.STANDARD,
      details: ['Lifetime Usage', '3 Months Support & Updates', '1 Website License'],
      price: 299,
    },
    {
      type: PriceOptionType.PREMIUM,
      details: ['Lifetime Usage', '3 Months Support & Updates', '1 Website License'],
      price: 399,
    },
  ];

  return (
    <div className={classes['simple-price']}>
      <div className={classes['overlay']}></div>
      <div className="container relative z-3">
        <div className={classes['title']}>
          <h3>
            Simple pricing that scales
            <br />
            with your business
          </h3>
          <span>Whether you’re an business in growth mode or a game studio</span>
        </div>

        <div className={classes['cards']}>
          {priceOptions.map((priceOption) => (
            <PriceOptionCard {...priceOption} />
          ))}
        </div>
      </div>
    </div>
  );
}
