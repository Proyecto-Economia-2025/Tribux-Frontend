import React from 'react';

export interface LogoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  showText?: boolean;
}

export function Logo({ showText = true, ...props }: LogoProps): React.JSX.Element {
  return (
    <a className={`flex items-center gap-0.5 ${props.className || ''}`} {...props}>
      <img
        alt="Tribux Logo"
        className="rounded"
        height="32"
        src="/logo.webp"
        width="32"
      />
      {showText && <span className="text-xl font-bold">ribux</span>}
    </a>
  );
}