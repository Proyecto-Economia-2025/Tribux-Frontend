import React from 'react';
import { cn } from '../../lib/cn';

export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

export function NavLink({ href, children, active = false, className, ...props }: NavLinkProps): React.JSX.Element {
  return (
    <a
      className={cn(
        'text-sm font-medium hover:text-primary transition-colors',
        active && 'text-primary',
        className
      )}
      href={href}
      {...props}
    >
      {children}
    </a>
  );
}