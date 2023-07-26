import React, { ReactElement } from 'react';
import { ArticleCard, ArticleCardProps } from '../../../../common';

type Props = {};

export function ClassGrid({}: Props): ReactElement {
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
    <div className="p-[120px] space-y-[60px]">
      {articles.map((article) => (
        <ArticleCard {...article} />
      ))}
    </div>
  );
}
