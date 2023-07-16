import React, { Fragment, ReactElement } from 'react';
import { SideTabSection } from '../../../../../../common';

type Props = {};

export function HonorableSection({}: Props): ReactElement {
  const tabs = ['Worldwide', 'Australia', 'Belgium', 'Canada'];
  const tabContents = [
    <>
      <img src="https://wp.quomodosoft.com/growth/wp-content/uploads/2019/06/client3.png" alt="" />
      <img src="https://wp.quomodosoft.com/growth/wp-content/uploads/2019/06/client1.png" alt="" />
      <img src="https://wp.quomodosoft.com/growth/wp-content/uploads/2019/06/client6.png" alt="" />
      <img src="https://wp.quomodosoft.com/growth/wp-content/uploads/2019/06/client4.png" alt="" />
      <img src="https://wp.quomodosoft.com/growth/wp-content/uploads/2019/06/client2.png" alt="" />
      <img src="https://wp.quomodosoft.com/growth/wp-content/uploads/2019/06/client5.png" alt="" />
    </>,
    <>Content 2</>,
    <>Content 3</>,
    <>Content 4</>,
  ];

  return <SideTabSection title="My Honorable" description="Clients" tabs={tabs} tabContents={tabContents} />;
}
