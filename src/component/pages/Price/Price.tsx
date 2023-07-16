import React, { ReactElement } from 'react';
import { SimplePriceSection } from './components/sections';
import { SideTabSection } from '../../../common';

type Props = {};

export function Price({}: Props): ReactElement {
  const tabs = ['General', 'Payment', 'Support', 'Refund Policy'];
  const tabContents = [
    <div className="space-y-8 text-white">
      <div>
        <p className="text-xl mb-3">How many landing page I can work with your product?</p>
        <span>
          You can use our themes on as many site you want. Our theme is 100% GPL & there is not domain restriction. You
          will receive support for the given domain amount.
        </span>
      </div>

      <div>
        <p className="text-xl mb-3">Can I use your product for my client?</p>
        <span>Yes, you can. You can work with any type of project without taking our permission.</span>
      </div>

      <div>
        <p className="text-xl mb-3">What happens after my subscription runs out?</p>
        <span>
          For Template Plans: After your subscription expires, you can still keep using the products you have downloaded
          from our site. But without an active subscription, you will NOT get updates and technical support from us.
        </span>
      </div>

      <div>
        <p className="text-xl mb-3">Will Growth Products slow down my website?</p>
        <span>
          No, absolutely not. We are very obsessed about speed and optimization is not after thought for us. We made
          sure that the designs are almost exclusively CSS, so that no images need to be loaded. We also optimized all
          the code for the fastest possible loading times.
        </span>
      </div>
    </div>,
    <>Content 2</>,
    <>Content 3</>,
    <>Content 4</>,
  ];

  return (
    <>
      <SimplePriceSection />
      <SideTabSection
        title="FAQ"
        description="Question and Answers"
        descriptionClass="!text-3xl"
        tabs={tabs}
        tabContents={tabContents}
        tabPanelClass="!grid-cols-none !grid-rows-none"
      />
    </>
  );
}
