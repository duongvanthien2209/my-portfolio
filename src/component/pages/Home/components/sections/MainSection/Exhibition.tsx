import React, { ReactElement } from 'react';
import { ExhibitionCard, ExhibitionCardProps } from '../../../../../../common';

type Props = {};

export function Exhibition({}: Props): ReactElement {
  const exhibitionCards: ExhibitionCardProps[] = [
    {
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/elementor/thumbs/post-11-oz7w353m5jlxgw3wdwoxy7lmjaq4uaq96w1gnunbmo.jpg',
      title: 'Can you help translate this site into a foreign?',
    },
    {
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/elementor/thumbs/post-10-oz7w353m5jlxgw3wdwoxy7lmjaq4uaq96w1gnunbmo.jpg',
      title: 'Can you help translate this site into a foreign?',
    },
    {
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/elementor/thumbs/post-8-oz7w353m5jlxgw3wdwoxy7lmjaq4uaq96w1gnunbmo.jpg',
      title: 'Can you help translate this site into a foreign?',
    },
    {
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/elementor/thumbs/post-7-oz7w353m5jlxgw3wdwoxy7lmjaq4uaq96w1gnunbmo.jpg',
      title: 'Can you help translate this site into a foreign?',
    },
    {
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/elementor/thumbs/post-6-oz7w353m5jlxgw3wdwoxy7lmjaq4uaq96w1gnunbmo.jpg',
      title: 'Can you help translate this site into a foreign?',
    },
    {
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/elementor/thumbs/post-4-oz7w353m5jlxgw3wdwoxy7lmjaq4uaq96w1gnunbmo.jpg',
      title: 'Can you help translate this site into a foreign?',
    },
  ];

  return (
    <div className="flex flex-col sm:grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 px-[10px] lg:px-[50px] py-[70px] gap-[30px]">
      {exhibitionCards.map((exhibitionCard) => (
        <ExhibitionCard {...exhibitionCard} />
      ))}
    </div>
  );
}
