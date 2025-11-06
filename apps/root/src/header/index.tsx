import React from 'react';
import ReactDOMClient from 'react-dom/client';
import singleSpaReact from 'single-spa-react';
import { MobileMenuButton } from './mobile-menu-button';
import './header.css';

function Header(): React.JSX.Element {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-b-muted bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <a className="flex items-center gap-0.5" href="/">
          <img
            alt="Tribux Logo"
            className="rounded"
            height="32"
            src="/logo.webp"
            width="32"
          />
          <span className="text-xl font-bold">ribux</span>
        </a>
        <nav className="hidden sm:flex gap-6 ">
          <a
            className="text-sm font-medium hover:text-primary"
            href="#features"
          >
            Características
          </a>
          <a
            className="text-sm font-medium hover:text-primary"
            href="#testimonials"
          >
            Testimonios
          </a>
          <a className="text-sm font-medium hover:text-primary" href="#pricing">
            Precios
          </a>
          <a className="text-sm font-medium hover:text-primary" href="#about">
            Acerca de
          </a>
        </nav>
        <MobileMenuButton />
      </div>
    </header>
  );
}

export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent: Header,
  errorBoundary() {
    return <></>;
  },
});
