import React, { ReactElement } from 'react';
import classes from './Button.module.scss';
import { ExtendableComponentProps } from '../overrideableComponent';
import classNames from 'classnames';

type Props = ExtendableComponentProps<'button'>;

export function Button({ className, children }: Props): ReactElement {
  return <button className={classNames(classes['btn'], className)}>{children}</button>;
}
