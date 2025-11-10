import React from 'react';
import { Icon } from '../atoms/Icon';
import { cn } from '../../lib/cn';

export interface SocialIconProps {
  name: 'twitter' | 'linkedin' | 'facebook' | 'instagram';
  href?: string;
  className?: string;
}

export function SocialIcon({ name, href = '/', className }: SocialIconProps): React.JSX.Element {
  return (
    <a
      className={cn(
        'rounded-full bg-muted p-2 text-muted-foreground hover:bg-muted/80 hover:text-foreground transition-colors',
        className
      )}
      href={href}
    >
      <span className="sr-only">{name}</span>
      <Icon name={name} size={20} />
    </a>
  );
}