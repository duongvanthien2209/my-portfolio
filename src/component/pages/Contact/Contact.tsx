import React, { ReactElement } from 'react';
import classes from './Contact.module.scss';
import { ContactMeSection } from './components';
import { SocialMediaSection } from '../Home/components/sections/SocialMediaSection';

type Props = {};

export function Contact({}: Props): ReactElement {
  return (
    <>
      <div className={classes['sub-title']}>
        <div className={classes['background-overlay']}></div>
        <div className="container relative z-3">
          <div className={classes['title']}>
            <h3 className="text-4xl">Get an estimate</h3>
            <p>Fill out this simple form. Our team will contact you promptly to discuss next steps.</p>
          </div>
        </div>
      </div>

      <ContactMeSection />
      <SocialMediaSection />
    </>
  );
}
