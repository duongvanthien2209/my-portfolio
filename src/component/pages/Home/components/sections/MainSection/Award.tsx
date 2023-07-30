import React, { ReactElement } from 'react';
import { AwardCard, AwardCardProps } from '../../../../../../common';

type Props = {};

export function Award({}: Props): ReactElement {
  const awardCards: AwardCardProps[] = [
    {
      title: 'Awards Name Here',
      description:
        'Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.',
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/award-1.png',
    },
    {
      title: 'Awards Name Here',
      description:
        'Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.',
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/award-2.png',
    },
    {
      title: 'Awards Name Here',
      description:
        'Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.',
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/award-3.png',
    },
    {
      title: 'Awards Name Here',
      description:
        'Strategy develop customer in organisational knowledge and market perspectives that inform and provoke.',
      img: 'https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/award-4.png',
    },
  ];

  return (
    <div className="flex flex-col lg:grid grid-cols-2 px-[50px] py-[70px] gap-[60px]">
      {awardCards.map((awardCard) => (
        <AwardCard {...awardCard} />
      ))}
    </div>
  );
}
