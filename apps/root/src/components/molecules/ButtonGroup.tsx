import React from 'react';
import { Button, ButtonProps } from '../atoms/Button';
import { cn } from '../../lib/cn';

export interface ButtonGroupProps {
  buttons: (ButtonProps & { key: string })[];
  className?: string;
  direction?: 'horizontal' | 'vertical';
}

export function ButtonGroup({ buttons, className, direction = 'horizontal' }: ButtonGroupProps): React.JSX.Element {
  const directionClasses = {
    horizontal: 'flex flex-col gap-2 min-[400px]:flex-row',
    vertical: 'flex flex-col gap-2'
  };

  return (
    <div className={cn(directionClasses[direction], className)}>
      {buttons.map(({ key, ...buttonProps }) => (
        <Button key={key} {...buttonProps} />
      ))}
    </div>
  );
}