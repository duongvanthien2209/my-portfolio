import React, { ReactElement } from 'react';
import classes from './ContactMeSection.module.scss';
import { Button } from '../../../../../../common';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {};

export function ContactMeSection({}: Props): ReactElement {
  return (
    <div className="container">
      <form className={classes['contact-form']}>
        <div className={classes['title']}>
          <span>CONTACT ME</span>
          <h3>Let’s Chat</h3>

          <p>Fill this out so we can learn more about you and your needs.</p>
        </div>

        <div className={classes['form-content']}>
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Organization Name" />
          <input type="date" className="text-[#9ca3af]" />
          <input type="text" placeholder="Budget" />
          <textarea className="row-span-2" placeholder="Message" name="" id="" cols={30} rows={5}></textarea>
          <input type="text" placeholder="Phone number" />
        </div>

        <Button className="mt-[30px]">Project Estimate</Button>
      </form>

      <div className={classes['contacts']}>
        <div className={classes['contact-card']}>
          <FontAwesomeIcon icon={solid('envelope')} />

          <div className={classes['contact-card-content']}>
            <p>Email:</p>
            <p>hello@growth.com</p>
          </div>
        </div>
        <div className={classes['contact-card']}>
          <FontAwesomeIcon icon={solid('phone')} />

          <div className={classes['contact-card-content']}>
            <p>Phone:</p>
            <p>+ 64 3 477 4000</p>
          </div>
        </div>
        <div className={classes['contact-card']}>
          <FontAwesomeIcon icon={solid('address-book')} />

          <div className={classes['contact-card-content']}>
            <p>Address:</p>
            <p>
              1600 Amphitheatre Parkway
              <br />
              Mountain View, Canada
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
