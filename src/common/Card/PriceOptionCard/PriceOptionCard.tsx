import React, { ReactElement } from 'react';
import { PriceOptionType } from '../../../constants';
import { Button } from '../../Button';

export type PriceOptionCardProps = {
  type: PriceOptionType;
  details: string[];
  price: number;
};

export function PriceOptionCard({ type, details, price }: PriceOptionCardProps): ReactElement {
  const { img, title } = {
    [PriceOptionType.BASIC]: {
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/06/rs1.png',
      title: 'Basic',
    },
    [PriceOptionType.STANDARD]: {
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/06/rs2.png',
      title: 'Standard',
    },
    [PriceOptionType.PREMIUM]: {
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/06/rs3.png',
      title: 'Premium',
    },
  }[type];

  return (
    <div className="space-y-[30px] px-[40px] pt-[50px] pb-[60px] rounded-lg bg-fourth shadow-lg">
      <img className="h-[100px] w-[100px]" src={img} alt="" />
      <h3 className="text-3xl font-semibold text-white">{title}</h3>
      <div className="text-white space-y-4">
        {details.map((detail) => (
          <p>{detail}</p>
        ))}
      </div>
      <p className="text-white">
        <span className="text-3xl text-textPrimary">${price}</span> /Month
      </p>
      <Button className="uppercase">Get started</Button>
    </div>
  );
}
