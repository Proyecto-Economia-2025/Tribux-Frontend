import React, { useState } from 'react';
import { navigateToUrl } from 'single-spa';
import { Logo } from '../atoms/Logo';
import { Button } from '../atoms/Button';
import { NavLink } from '../molecules/NavLink';
import { MobileMenu } from './MobileMenu';
import { cn } from '../../lib/cn';

export interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps): React.JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = () => {
    navigateToUrl('/auth/login');
  };

  const handleRegister = () => {
    navigateToUrl('/auth/create-user');
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
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
            <Button variant="outline" onClick={handleLogin}>Iniciar Sesión</Button>
            <Button variant="primary" onClick={handleRegister}>Registrarse</Button>
          </div>
          <button
            className="inline-flex sm:hidden h-9 items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            id="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </header>
      {isMenuOpen && <MobileMenu open={isMenuOpen} onClose={handleMenuClose} />}
    </>
  );
}