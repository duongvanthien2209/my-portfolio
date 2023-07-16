import React, { Fragment, ReactElement } from 'react';
import classes from './MainSection.module.scss';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import { About } from './About';

type Props = {};

export function MainSection({}: Props): ReactElement {
  return (
    <div className={classes['main-section']}>
      <Tab.Group>
        <Tab.List className={classes['tab-list']}>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className={classNames(classes['tab-header'], selected && classes['selected'])}>About</button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className={classNames(classes['tab-header'], selected && classes['selected'])}>Skills</button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className={classNames(classes['tab-header'], selected && classes['selected'])}>Service</button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className={classNames(classes['tab-header'], selected && classes['selected'])}>Interview</button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className={classNames(classes['tab-header'], selected && classes['selected'])}>Award</button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button className={classNames(classes['tab-header'], selected && classes['selected'])}>Exhibition</button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className="bg-fourth">
          <Tab.Panel>
            <About />
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
