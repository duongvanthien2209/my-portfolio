import React, { ReactElement } from 'react';
import { PriceOptionType } from '../../../constants';
import { Button } from '../../Button';
import { regular, solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type PriceOptionCardProps = {
  type: PriceOptionType;
  description: string;
  details: string[];
  price: number;
  deliveryDays: number;
  revisions?: number;
};

export function PriceOptionCard({
  type,
  details,
  price,
  description,
  deliveryDays,
  revisions,
}: PriceOptionCardProps): ReactElement {
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
    <div className="flex flex-col items-start space-y-[30px] px-[40px] pt-[50px] pb-[60px] rounded-lg bg-fourth shadow-lg">
      <img className="h-[100px] w-[100px]" src={img} alt="" />
      <div className="space-y-[10px]">
        <h3 className="text-3xl font-semibold text-textPrimary">{title}</h3>
        <div className="min-h-[60px]">
          <span className="block ds-text-body-small text-[#95979d]">{description}</span>
        </div>
        <div className="flex text-[#95979d] mdDown:space-x-4 lg:flex-col 2xl:flex-row 2xl:justify-between">
          <div className="mr-2 mb-4">
            <FontAwesomeIcon size={'lg'} icon={regular('clock')} />
            <span className="ml-2 break-keep font-semibold whitespace-nowrap">{deliveryDays} Days Delivery</span>
          </div>
          <div>
            <FontAwesomeIcon size={'lg'} icon={solid('arrows-rotate')} />
            <span className="ml-2 break-keep font-semibold whitespace-nowrap">
              {Number.isInteger(revisions) ? `${revisions} Revisions` : 'Unlimited'}
            </span>
          </div>
        </div>
      </div>
      <div className="flex-grow text-white space-y-4">
        {details.map((detail) => (
          <p>{detail}</p>
        ))}
      </div>
      <p className="text-3xl text-textPrimary">${price}</p>

      <Button className="uppercase">Get started</Button>
    </div>
  );
}
