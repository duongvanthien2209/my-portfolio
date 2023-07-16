import React, { ReactElement } from 'react';
import { ExtendableComponentProps } from '../../overrideableComponent';
import classNames from 'classnames';

export type SocialMediaCardProps = ExtendableComponentProps<
  'div',
  {
    title: string;
    description: string;
    icon: ReactElement;
  }
>;

export function SocialMediaCard({ className, title, description, icon }: SocialMediaCardProps): ReactElement {
  return (
    <div
      className={classNames('flex justify-between items-center p-[30px] border-textPrimary border rounded', className)}
    >
      <div>
        <p className="text-2xl font-bold text-white transition-all duration-300">{title}</p>
        <p className="text-textPrimary transition-all duration-300">{description}</p>
      </div>

      {icon}
    </div>
  );
}
