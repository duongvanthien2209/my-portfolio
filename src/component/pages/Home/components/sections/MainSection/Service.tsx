import React, { ReactElement } from 'react';
import { ServiceCard, ServiceCardProps } from '../../../../../../common';

type Props = {};

export function Service({}: Props): ReactElement {
  const serviceCards: ServiceCardProps[] = [
    {
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/service-1.png',
      title: 'Ecommerce Website',
      description: (
        <span>
          I will build your ecommerce website with <strong className="text-textPrimary">full functionality</strong> and
          friendly for <strong className="text-textPrimary">SEO</strong>.
        </span>
      ),
    },
    {
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/service-2.png',
      title: 'Portfolio Template',
      description: (
        <span>
          I will build your portfolio template follow your design and make sure it's
          <strong className="text-textPrimary">unique</strong> and{' '}
          <strong className="text-textPrimary">beautiful</strong>. And if you have any further requirements, I promise
          to always support you.
        </span>
      ),
    },
    {
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/service-3.png',
      title: 'Landing Page',
      description: (
        <span>
          I also can build a landing page follow your design and make sure it's{' '}
          <strong className="text-textPrimary">same with your design</strong> and have{' '}
          <strong className="text-textPrimary">full animations</strong>.
        </span>
      ),
    },
    {
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/service-4.png',
      title: 'Improve Website & Fix Bug',
      description: (
        <span>
          If you want to <strong className="text-textPrimary">improve your website</strong>, or your website have{' '}
          <strong className="text-textPrimary">some bugs</strong> and you want to find someone to fix these bugs. I will
          do all things for you.
        </span>
      ),
    },
  ];

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 px-[50px] py-[70px] gap-[60px]">
      {serviceCards.map((serviceCard) => (
        <ServiceCard {...serviceCard} />
      ))}
    </div>
  );
}
