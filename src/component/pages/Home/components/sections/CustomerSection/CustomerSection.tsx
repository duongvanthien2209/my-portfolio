import React, { ReactElement } from 'react';
import classes from './CustomerSection.module.scss';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper';
import { CustomerNavigation } from './CustomerNavigation';
import { PersonalCard, PersonalCardProps } from '../../../../../../common';

type Props = {};

export function CustomerSection({}: Props): ReactElement {
  const personalCards: PersonalCardProps[] = [
    {
      avatar: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/06/team-8-300x300.png',
      name: 'Martha Sandoval',
      jobTitle: 'Product Designer at CodeNext',
      description:
        'We are motivated by the satisfaction of our clients. Put your trust in us and share in our growth Asset Management is made up of a team of expert, committed and experienced people with a passion for financial markets. Our goal is to achieve continuous.',
    },
    {
      avatar: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/06/team-7-300x300.png',
      name: 'Martha Sandoval',
      jobTitle: 'Product Designer at CodeNext',
      description:
        'We are motivated by the satisfaction of our clients. Put your trust in us and share in our growth Asset Management is made up of a team of expert, committed and experienced people with a passion for financial markets. Our goal is to achieve continuous.',
    },
    {
      avatar: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/06/team-4-300x300.png',
      name: 'Martha Sandoval',
      jobTitle: 'Product Designer at CodeNext',
      description:
        'We are motivated by the satisfaction of our clients. Put your trust in us and share in our growth Asset Management is made up of a team of expert, committed and experienced people with a passion for financial markets. Our goal is to achieve continuous.',
    },
    {
      avatar: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/06/team-1-300x300.png',
      name: 'Martha Sandoval',
      jobTitle: 'Product Designer at CodeNext',
      description:
        'We are motivated by the satisfaction of our clients. Put your trust in us and share in our growth Asset Management is made up of a team of expert, committed and experienced people with a passion for financial markets. Our goal is to achieve continuous.',
    },
  ];

  return (
    <div className={classes['customer-section']}>
      <div className="container">
        <Swiper loop={true} spaceBetween={30} slidesPerView={2}>
          {personalCards.map((personalCard, index) => (
            <SwiperSlide>
              <PersonalCard {...personalCard} />
            </SwiperSlide>
          ))}
          <div className="flex justify-between items-center mb-[50px]" slot="container-start">
            <div className={classes['title']}>
              <span>TESTIMONIALS</span>
              <h3>Happy Clients Says</h3>
            </div>

            <CustomerNavigation />
          </div>
        </Swiper>
      </div>
    </div>
  );
}
