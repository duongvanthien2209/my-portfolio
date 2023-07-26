import React, { ReactElement } from 'react';
import classes from './PostTimeline.module.scss';
import { ArticleCard, ArticleCardProps } from '../../../../common';

type Props = {};

export function PostTimeline({}: Props): ReactElement {
  const articles1: ArticleCardProps[] = [
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

  const articles2: ArticleCardProps[] = [
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
    <div className="grid grid-cols-2 py-[120px] gap-x-[30px]">
      <div>
        <div className="border-l border-[#ffffff1a] pl-[30px] space-y-[60px]">
          {articles1.map((article) => (
            <ArticleCard className={classes['custom-article']} {...article} />
          ))}
        </div>
      </div>
      <div>
        <div className="border-l border-[#ffffff1a] pl-[30px] space-y-[60px]">
          {articles2.map((article) => (
            <ArticleCard className={classes['custom-article']} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
}
