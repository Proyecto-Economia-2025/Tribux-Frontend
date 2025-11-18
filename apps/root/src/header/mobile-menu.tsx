import React from 'react';
import { navigateToUrl } from 'single-spa';

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}): React.JSX.Element {
  const handleLogin = () => {
    onClose();
    navigateToUrl('/auth/login');
  };

  const handleRegister = () => {
    onClose();
    navigateToUrl('/auth/create-user');
  };

  return (
    <div
      className={`fixed top-0 inset-0 z-50 bg-background/80 backdrop-blur-sm sm:hidden ${open ? '' : 'hidden'}`}
      id="mobile-menu"
    >
      <div className="fixed inset-y-0 top-0 right-0 w-full min-h-svh max-w-xs bg-background p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <a className="flex items-center gap-0.5" href="/" onClick={onClose}>
            <img
              alt="Tribux Logo"
              className="rounded"
              height="32"
              src="/logo.webp"
              width="32"
            />
            <span className="text-xl font-bold">ribux</span>
          </a>
          <button
            className="inline-flex h-9 items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            id="close-mobile-menu"
            onClick={onClose}
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
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>
        <nav className="mt-6 flex flex-col gap-4">
          <a
            className="text-base font-medium hover:text-primary"
            href="#features"
            onClick={onClose}
          >
            Características
          </a>
          <a
            className="text-base font-medium hover:text-primary"
            href="#testimonials"
            onClick={onClose}
          >
            Testimonios
          </a>
          <a
            className="text-base font-medium hover:text-primary"
            href="#pricing"
            onClick={onClose}
          >
            Precios
          </a>
          <a
            className="text-base font-medium hover:text-primary"
            href="#about"
            onClick={onClose}
          >
            Acerca de
          </a>
          <div className="mt-4 flex flex-col gap-2">
            <button
              className="inline-flex h-10 w-full items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-muted"
              onClick={handleLogin}
              type="button"
            >
              Iniciar Sesión
            </button>
            <button
              className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              onClick={handleRegister}
              type="button"
            >
              Registrarse
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
