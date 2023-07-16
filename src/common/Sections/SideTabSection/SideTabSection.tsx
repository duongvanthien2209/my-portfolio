import React, { Fragment, ReactElement } from 'react';
import classes from './SideTabSection.module.scss';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import { ExtendableComponentProps } from '../../overrideableComponent';

type SideTabSectionProps = ExtendableComponentProps<
  'div',
  {
    title: string;
    description: string;
    tabs: string[];
    tabContents: ReactElement[];
    titleClass?: string;
    descriptionClass?: string;
    tabPanelClass?: string;
  }
>;

export function SideTabSection({
  title,
  description,
  tabs,
  tabContents,
  titleClass,
  descriptionClass,
  tabPanelClass,
}: SideTabSectionProps): ReactElement {
  return (
    <div className={classes['side-tab-section']}>
      <div className={classes['wrapper']}>
        <Tab.Group>
          <Tab.List className={classes['tab-list']}>
            <div className={classes['title']}>
              <span className={classNames(titleClass)}>{title}</span>
              <h3 className={classNames(descriptionClass)}>{description}</h3>
            </div>

            {tabs.map((tab) => (
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button className={classNames(classes['tab-header'], selected && classes['selected'])}>
                    <span>{tab}</span>
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className={classes['tab-panels']}>
            {tabContents.map((tabContent) => (
              <Tab.Panel className={classNames(classes['tab-panel'], tabPanelClass)}>{tabContent}</Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
