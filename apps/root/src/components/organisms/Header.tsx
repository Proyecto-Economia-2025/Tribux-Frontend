import React from 'react';
import { navigateToUrl } from 'single-spa';

export interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps): React.JSX.Element {
  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

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

        {/* Navigation Links */}
        <nav style={{
          display: 'flex',
          gap: '32px',
          flex: 1,
          justifyContent: 'center',
        }}>
          <button
            onClick={() => scrollToSection('features')}
            style={{
              background: 'none',
              border: 'none',
              color: '#0f172a',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              padding: '8px 0',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0f766e')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#0f172a')}
          >
            Características
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            style={{
              background: 'none',
              border: 'none',
              color: '#0f172a',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              padding: '8px 0',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0f766e')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#0f172a')}
          >
            Testimonios
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            style={{
              background: 'none',
              border: 'none',
              color: '#0f172a',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              padding: '8px 0',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0f766e')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#0f172a')}
          >
            Precios
          </button>
          <button
            onClick={() => scrollToSection('about')}
            style={{
              background: 'none',
              border: 'none',
              color: '#0f172a',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500',
              padding: '8px 0',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#0f766e')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#0f172a')}
          >
            Sobre Nosotros
          </button>
        </nav>

        {/* Auth Buttons */}
        <div style={{
          display: 'flex',
          gap: '12px',
        }}>
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
              color: '#0f172a',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#f1f5f9')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'white')}
          >
            Entrar
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
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#0d5e57')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#0f766e')}
          >
            Registrarse
          </button>
        </div>
      </div>
    </header>
  );
}