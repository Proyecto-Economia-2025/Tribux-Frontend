import React from 'react';
import { navigateToUrl } from 'single-spa';

export interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps): React.JSX.Element {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 9999,
      width: '100%',
      borderBottom: '1px solid #e2e8f0',
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(8px)',
    }}>
      <div style={{
        display: 'flex',
        height: '64px',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '24px',
        paddingRight: '24px',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Logo */}
        <div
          onClick={() => navigateToUrl('/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer',
          }}
        >
          <img
            alt="Tribux Logo"
            src="/logo.webp"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '4px',
            }}
          />
          <span style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#0f172a',
          }}>ribux</span>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <nav style={{
          display: 'none',
          gap: '24px',
        }} className="md:flex">
          <a href="#features" style={{ color: '#0f172a', textDecoration: 'none' }}>
            Características
          </a>
          <a href="#testimonials" style={{ color: '#0f172a', textDecoration: 'none' }}>
            Testimonios
          </a>
          <a href="#pricing" style={{ color: '#0f172a', textDecoration: 'none' }}>
            Precios
          </a>
          <a href="#about" style={{ color: '#0f172a', textDecoration: 'none' }}>
            Acerca de
          </a>
        </nav>

        {/* Buttons - Hidden on mobile */}
        <div style={{
          display: 'none',
          gap: '16px',
        }} className="md:flex">
          <button
            onClick={() => navigateToUrl('/auth/login')}
            style={{
              padding: '8px 16px',
              border: '1px solid #e2e8f0',
              background: 'white',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            Iniciar Sesión
          </button>
          <button
            onClick={() => navigateToUrl('/auth/create-user')}
            style={{
              padding: '8px 16px',
              background: '#0f766e',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            Registrarse
          </button>
        </div>
      </div>
    </header>
  );
}