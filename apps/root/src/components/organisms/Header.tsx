import React from 'react';
import { navigateToUrl } from 'single-spa';
import { Logo } from '../atoms/Logo';
import { Button } from '../atoms/Button';
import { NavLink } from '../molecules/NavLink';
import { cn } from '../../lib/cn';

export interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps): React.JSX.Element {
  const handleLogin = () => {
    navigateToUrl('/auth/login');
  };

  const handleRegister = () => {
    navigateToUrl('/auth/create-user');
  };

  return (
    <header className={cn('sticky top-0 z-50 w-full border-b border-b-muted bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60', className)}>
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav className="hidden md:flex gap-6">
          <NavLink href="#features">Características</NavLink>
          <NavLink href="#testimonials">Testimonios</NavLink>
          <NavLink href="#pricing">Precios</NavLink>
          <NavLink href="#about">Acerca de</NavLink>
        </nav>
        <div className="hidden md:flex gap-4">
          <Button variant="outline" onClick={handleLogin}>Iniciar Sesión</Button>
          <Button variant="primary" onClick={handleRegister}>Registrarse</Button>
        </div>
      </div>
    </header>
  );
}