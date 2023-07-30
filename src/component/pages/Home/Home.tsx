import React, { CSSProperties, ReactElement } from 'react';
import classes from './Home.module.scss';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NavigateGroup } from './NavigateGroup';

import { BannerSection, ClientSection, CustomerSection, HonorableSection, MainSection } from './components/sections';
import { SocialMediaSection } from './components/sections/SocialMediaSection';

type Props = {};

export function Home({}: Props): ReactElement {
  return (
    <div className={classes['wrapper']}>
      <BannerSection />
      <MainSection />
      <ClientSection />
      <CustomerSection />
      <HonorableSection />
      <SocialMediaSection />
    </div>
  );
}
