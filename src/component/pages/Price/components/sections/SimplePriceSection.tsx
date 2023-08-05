import React, { ReactElement } from 'react';
import classes from './SimplePriceSection.module.scss';
import { PriceOptionCard, PriceOptionCardProps } from '../../../../../common/Card/PriceOptionCard';
import { PriceOptionType } from '../../../../../constants';

type Props = {};

export function SimplePriceSection({}: Props): ReactElement {
  const priceOptions: PriceOptionCardProps[] = [
    {
      type: PriceOptionType.BASIC,
      description: 'FULL RESPONSE WEBSITE + 3 upto 4 pages include landing page',
      details: [
        '4 pages',
        'Design customization',
        'Content upload',
        'Responsive design',
        'Source code',
        'Detailed code comments',
      ],
      deliveryDays: 2,
      revisions: 2,
      price: 10,
    },
    {
      type: PriceOptionType.STANDARD,
      description: 'FULL RESPONSE WEBSITE WITH FUNCTIONALITY + 5 upto 7 pages, landing page + including functionality',
      details: [
        '7 pages',
        'Design customization',
        'Content upload',
        'Responsive design',
        'Source code',
        'Detailed code comments',
      ],
      deliveryDays: 4,
      revisions: 5,
      price: 20,
    },
    {
      type: PriceOptionType.PREMIUM,
      description: 'FULL RESPONSE WEBSITE WITH FULL FUNCTIONALITY + 7 upto 10 pages, landing page + full functionality',
      details: [
        '10 pages',
        'Design customization',
        'Content upload',
        'Responsive design',
        'Source code',
        'Detailed code comments',
      ],
      deliveryDays: 7,
      price: 50,
    },
  ];

  return (
    <div className={classes['simple-price']}>
      <div className={classes['overlay']}></div>
      <div className="container relative z-3">
        <div className={classes['title']}>
          <h3 className="mb-4">
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
