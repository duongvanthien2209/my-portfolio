import React, { ReactElement } from 'react';
import classes from './Project.module.scss';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type ProjectProps = {
  title: string;
  tab: string | string[];
};

export function Project({ title, tab }: ProjectProps): ReactElement {
  function renderTagContent() {
    if (typeof tab === 'string') {
      return <span>{tab}</span>;
    }

    return (
      <>
        {tab.map((tabItem) => (
          <span>{tabItem}</span>
        ))}
      </>
    );
  }

  return (
    <>
      <div className={classes['sub-title']}>
        <div className={classes['background-overlay']}></div>
        <div className="container relative z-3">
          <div className={classes['title']}>
            <h3 className="text-4xl mb-4">{title}</h3>
            {renderTagContent()}
          </div>
        </div>
      </div>

      <div className={classes['content']}>
        <div>
          <h2 className="text-2xl text-white font-semibold mb-6">Discover Business Strategy</h2>
          <div className="grid grid-cols-2 gap-6 text-white">
            <p>
              A thoughtful discovery process will help us gain an accurate understanding of the breadth and depth of
              your project so that we can develop realistic project recommendations. These initial phases also teach us
              about how we can best work together, and how to tailor our approach to ensure success in our project and
              in every aspect of our relationship.
            </p>
            <p>
              Spending time with you to learn about your industry positions us to offer insights about how we can impact
              your business, and allows us to help you shape the direction of your brand or your product.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden">
            <img
              className="w-full h-auto"
              src="https://wp.quomodosoft.com/growth/wp-content/uploads/2019/05/portfolio1.jpg"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-2xl text-white font-semibold mb-6">Opportunity analysis and strategy planning</h2>
            <div className="space-y-6">
              <p className="text-white">
                Communication with our Clients and teams is one of the most important responsibilities of a Project
                Manager as well as one of the activities we use most often in our daily work. Hence, we keep our
                communication transparent, to the point, and as clear as possible so that all parties can get on the
                same page quickly.
              </p>
              <p className="text-white">
                But there are times when we assume that since something was said once, everybody remembers it, and we
                don’t really need to communicate it again, which most likely is a mistake.
              </p>
              <div>
                <h3 className="text-2xl text-textPrimary mb-6">Business Strategy</h3>
                <ul className={classes['business-list']}>
                  <li>
                    <FontAwesomeIcon size="sm" icon={regular('square')} />
                    <span>Baseline Evaluation</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={regular('square')} />
                    <span>Research</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={regular('square')} />
                    <span>Opportunity Analysis</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={regular('square')} />
                    <span>Strategic Planning</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={regular('square')} />
                    <span>Branding Strategy</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={regular('square')} />
                    <span>Experience Strategy</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={regular('square')} />
                    <span>Production Planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
