import React, { ReactElement } from 'react';
import { InterviewCard, InterviewCardProps } from '../../../../../../common';

type Props = {};

export function Interview({}: Props): ReactElement {
  const interviewCards: InterviewCardProps[] = [
    {
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/interview-1.jpg',
      title: 'Business Strategy',
      description:
        'There are many variations of passages lorem Ipsum available, but the majority have suffered alteration.',
    },
    {
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/interview-2.jpg',
      title: 'Business Strategy',
      description:
        'There are many variations of passages lorem Ipsum available, but the majority have suffered alteration.',
    },
    {
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/interview-3.jpg',
      title: 'Business Strategy',
      description:
        'There are many variations of passages lorem Ipsum available, but the majority have suffered alteration.',
    },
    {
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/interview-4.jpg',
      title: 'Business Strategy',
      description:
        'There are many variations of passages lorem Ipsum available, but the majority have suffered alteration.',
    },
  ];

  return (
    <div className="grid grid-cols-2 px-[50px] py-[70px] gap-[60px]">
      {interviewCards.map((interviewCard) => (
        <InterviewCard {...interviewCard} />
      ))}
    </div>
  );
}
