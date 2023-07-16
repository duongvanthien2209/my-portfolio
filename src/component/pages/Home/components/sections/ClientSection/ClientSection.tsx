import React, { ReactElement } from 'react';
import classes from './ClientSection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { ProjectCard, ProjectCardProps } from '../../../../../../common';

type Props = {};

export function ClientSection({}: Props): ReactElement {
  const projects: ProjectCardProps[] = [
    {
      tag: 'APP, BRANDING, PRODUCT',
      title: 'Project Management Admin Panel',
      description: 'Discover Business Strategy A thoughtful discovery process',
      image: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/06/work-1-768x576.jpg',
    },
    {
      tag: 'GAME, INTERIOR, WEB',
      title: 'Project Management Admin Panel',
      description: 'Discover Business Strategy A thoughtful discovery process',
      image: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/06/architecture1.png',
    },
    {
      tag: 'APP, GAME, PRODUCT',
      title: 'Project Management Admin Panel',
      description: 'Discover Business Strategy A thoughtful discovery process',
      image: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/06/dashboard_admin.png',
    },
    {
      tag: 'APP, BRANDING, PRODUCT',
      title: 'Project Management Admin Panel',
      description: 'Discover Business Strategy A thoughtful discovery process',
      image: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/06/to-do-list.png',
    },
    {
      tag: 'GAME, INTERIOR, WEB',
      title: 'Project Management Admin Panel',
      description: 'Discover Business Strategy A thoughtful discovery process',
      image: 'https://wp.quomodosoft.com/growth/blog/portfolio/project-management-admin-panel-4/',
    },
    {
      tag: 'APP, GAME, PRODUCT',
      title: 'Project Management Admin Panel',
      description: 'Discover Business Strategy A thoughtful discovery process',
      image: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/06/work-1.jpg',
    },
  ];

  return (
    <div className={classes['client-section']}>
      <div className={classes['title']}>
        <span>My Client</span>
        <h3>Projects</h3>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={3.5}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
          },
        }}
        modules={[Pagination]}
      >
        {projects.map((project) => (
          <SwiperSlide>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
