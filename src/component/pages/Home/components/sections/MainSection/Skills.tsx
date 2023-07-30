import React, { ReactElement } from 'react';
import { ProgressBar, ProgressBarProps } from '../../../../../../common';

type Props = {};

export function Skills({}: Props): ReactElement {
  const skills: ProgressBarProps[] = [
    { title: 'Javascript', percent: 90 },
    { title: 'Typescript', percent: 60 },
    { title: 'ReactJS', percent: 80 },
    { title: 'NextJS', percent: 70 },
    { title: 'NestJS', percent: 50 },
    { title: 'ExpessJS', percent: 70 },
    { title: 'MongoDB', percent: 60 },
    { title: 'SQL', percent: 80 },
  ];

  return (
    <div className="flex flex-col md:grid grid-cols-2 px-[50px] py-[70px] gap-[60px]">
      {skills.map((skill) => (
        <ProgressBar {...skill} />
      ))}
    </div>
  );
}
