import React, { CSSProperties, ReactElement } from 'react';
import classes from './Home.module.scss';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NavigateGroup } from './NavigateGroup';

// Images
import img1 from '../../../assets/images/img1.jpg';
import img2 from '../../../assets/images/img2.jpg';
import img3 from '../../../assets/images/img3.jpg';
import img4 from '../../../assets/images/img4.jpg';
import img5 from '../../../assets/images/img5.jpg';
import img6 from '../../../assets/images/img6.jpg';
import img7 from '../../../assets/images/img7.jpg';
import img8 from '../../../assets/images/img8.jpeg';
import img9 from '../../../assets/images/img9.jpg';
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
