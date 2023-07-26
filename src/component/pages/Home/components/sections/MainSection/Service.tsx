import React, { ReactElement } from 'react';
import { ServiceCard, ServiceCardProps } from '../../../../../../common';

type Props = {};

export function Service({}: Props): ReactElement {
  const serviceCards: ServiceCardProps[] = [
    {
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/service-1.png',
      title: 'Ecommerce Website',
      description:
        'Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.',
    },
    {
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/service-2.png',
      title: 'Portfolio Template',
      description:
        'Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.',
    },
    {
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/service-3.png',
      title: 'Landing Page',
      description:
        'Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.',
    },
    {
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/service-4.png',
      title: 'Improve Website & Fix Bug',
      description:
        'Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.',
    },
  ];

  return (
    <div className="grid grid-cols-3 px-[50px] py-[70px] gap-[60px]">
      {serviceCards.map((serviceCard) => (
        <ServiceCard {...serviceCard} />
      ))}
    </div>
  );
}
