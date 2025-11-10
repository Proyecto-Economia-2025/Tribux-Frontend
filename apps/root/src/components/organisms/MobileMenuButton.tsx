import React, { useState } from 'react';
import { Icon } from '../atoms/Icon';
import { MobileMenu } from './MobileMenu';

export function MobileMenuButton(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="inline-flex h-9 items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground sm:hidden"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <Icon name="hamburger" size={20} />
        <span className="sr-only">Open menu</span>
      </button>
      <MobileMenu open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}