import React, { ReactElement } from 'react';
import { ArticleCard, ArticleCardProps } from '../../../../common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import classes from './LeftSidebar.module.scss';

type Props = {};

export function LeftSidebar({}: Props): ReactElement {
  const articles: ArticleCardProps[] = [
    {
      dateCreate: 'MAY 27, 2019',
      title: 'The Millionaire Guide On Portfolio To Help You Get Rich.',
      description:
        'It’s been quite a while since talked about our failures here. Since then, we’ve made some new mistakes but used each of them as an opportunity to grow and we would like to share with you the lessons we learned.',
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/post-2.jpg',
    },

    {
      dateCreate: 'MAY 27, 2019',
      title: 'The Millionaire Guide On Portfolio To Help You Get Rich.',
      description:
        'It’s been quite a while since talked about our failures here. Since then, we’ve made some new mistakes but used each of them as an opportunity to grow and we would like to share with you the lessons we learned.',
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/post-2.jpg',
    },
    {
      dateCreate: 'MAY 27, 2019',
      title: 'The Millionaire Guide On Portfolio To Help You Get Rich.',
      description:
        'It’s been quite a while since talked about our failures here. Since then, we’ve made some new mistakes but used each of them as an opportunity to grow and we would like to share with you the lessons we learned.',
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/post-2.jpg',
    },
    {
      dateCreate: 'MAY 27, 2019',
      title: 'The Millionaire Guide On Portfolio To Help You Get Rich.',
      description:
        'It’s been quite a while since talked about our failures here. Since then, we’ve made some new mistakes but used each of them as an opportunity to grow and we would like to share with you the lessons we learned.',
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/post-2.jpg',
    },
    {
      dateCreate: 'MAY 27, 2019',
      title: 'The Millionaire Guide On Portfolio To Help You Get Rich.',
      description:
        'It’s been quite a while since talked about our failures here. Since then, we’ve made some new mistakes but used each of them as an opportunity to grow and we would like to share with you the lessons we learned.',
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/post-2.jpg',
    },
    {
      dateCreate: 'MAY 27, 2019',
      title: 'The Millionaire Guide On Portfolio To Help You Get Rich.',
      description:
        'It’s been quite a while since talked about our failures here. Since then, we’ve made some new mistakes but used each of them as an opportunity to grow and we would like to share with you the lessons we learned.',
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/post-2.jpg',
    },
    {
      dateCreate: 'MAY 27, 2019',
      title: 'The Millionaire Guide On Portfolio To Help You Get Rich.',
      description:
        'It’s been quite a while since talked about our failures here. Since then, we’ve made some new mistakes but used each of them as an opportunity to grow and we would like to share with you the lessons we learned.',
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/post-2.jpg',
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 py-[120px]">
      <div className="space-y-8">
        <div className="flex p-4 border border-white rounded">
          <input className="grow bg-transparent outline-none text-white" placeholder="Search here" type="text" />

          <button className="text-white hover:text-textPrimary">
            <FontAwesomeIcon icon={solid('magnifying-glass')} />
          </button>
        </div>

        <div className={classes['left-side-card']}>
          <div className="absolute top-0 left-0 h-full w-full p-[20px] space-y-6">
            <img
              className="w-[144px]"
              src="https://wp.quomodosoft.com/growth/wp-content/uploads/2019/09/logo-3.png"
              alt=""
            />
            <h3 className="text-white text-2xl font-semibold">Will you need case studies?</h3>
            <p className="text-white">Communication with our Clients & teams is one of the most important.</p>
          </div>
        </div>
      </div>
      <div className="col-span-2 space-y-[50px]">
        {articles.map((article) => (
          <ArticleCard {...article} />
        ))}
      </div>
    </div>
  );
}
