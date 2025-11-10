import React from 'react';
import { Logo } from '../atoms/Logo';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { NavLink } from '../molecules/NavLink';
import { cn } from '../utils/cn';

export interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps): React.JSX.Element {
  return (
    <header className={cn('sticky top-0 z-50 w-full border-b border-b-muted bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60', className)}>
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden sm:flex gap-6">
          <NavLink href="#features">Características</NavLink>
          <NavLink href="#testimonials">Testimonios</NavLink>
          <NavLink href="#pricing">Precios</NavLink>
          <NavLink href="#about">Acerca de</NavLink>
        </nav>
        <div className="hidden sm:flex gap-4">
          <Button variant="outline">Iniciar Sesión</Button>
          <Button variant="primary">Registrarse</Button>
        </div>
        <button
          className="inline-flex h-9 items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground sm:hidden"
          type="button"
        >
          <Icon name="hamburger" size={20} />
          <span className="sr-only">Open menu</span>
        </button>
      </div>
    </header>
  );
}