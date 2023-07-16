import React, { ReactElement } from 'react';
import classes from './Footer.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '../../../common';
import classNames from 'classnames';

type Props = {};

export function Footer({}: Props): ReactElement {
  const menuItems = [
    { title: 'Home', link: '' },
    { title: 'Price', link: '/price' },
    { title: 'Shop', link: '/shop' },
    { title: 'Blog', link: '/blog' },
    { title: 'Contact', link: '/contact' },
  ];

  return (
    <div className="pt-[100px] pb-[40px] bg-[#323652]">
      <div className="container">
        <div className="float-left">
          <Link to="/">
            <img
              className="max-w-[150px]"
              src="https://wp.quomodosoft.com/growth/wp-content/uploads/2019/09/logo-3.png"
              alt=""
            />
          </Link>
        </div>

        <Button className="float-right">Let's chat</Button>
        <div className="flex flex-col justify-between items-center">
          <h2 className="text-4xl font-semibold text-white">Let’s Talk?</h2>

          <div className="text-center mt-[40px]">
            <ul className="flex justify-center mb-[20px]">
              {menuItems.map((menuItem) => (
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `px-[20px] py-[10px]${isActive ? ' text-textPrimary' : ' text-white hover:text-textPrimary'}`
                    }
                    to={menuItem.link}
                  >
                    {menuItem.title}
                  </NavLink>
                </li>
              ))}
            </ul>
            <span className="text-white">Copyright By@Example - 2019</span>
          </div>
        </div>
        <div className="clear-both"></div>
      </div>
    </div>
  );
}
