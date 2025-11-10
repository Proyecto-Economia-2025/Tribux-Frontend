import React, { useState } from 'react';
import { Logo } from '../atoms/Logo';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { NavLink } from '../molecules/NavLink';
import { ButtonGroup } from '../molecules/ButtonGroup';

export interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps): React.JSX.Element {
  return (
    <div
      className={`fixed top-0 inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden${open ? '' : ' hidden'}`}
      id="mobile-menu"
    >
      <div className="fixed inset-y-0 top-0 right-0 w-full min-h-svh max-w-xs bg-background p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <Logo onClick={onClose} />
          <button
            className="inline-flex h-9 items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            onClick={onClose}
            type="button"
          >
            <Icon name="close" size={20} />
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <nav className="mt-6 flex flex-col gap-4">
          <NavLink href="#features" onClick={onClose}>Características</NavLink>
          <NavLink href="#testimonials" onClick={onClose}>Testimonios</NavLink>
          <NavLink href="#pricing" onClick={onClose}>Precios</NavLink>
          <NavLink href="#about" onClick={onClose}>Acerca de</NavLink>
          <div className="mt-4">
            <ButtonGroup
              buttons={[
                { key: 'login', children: 'Iniciar Sesión', variant: 'outline', onClick: onClose },
                { key: 'register', children: 'Registrarse', variant: 'primary', onClick: onClose }
              ]}
            />
          </div>
        </nav>
      </div>
    </div>
  );
}