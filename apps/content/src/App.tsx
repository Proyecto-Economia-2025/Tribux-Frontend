import React, { useState, useEffect } from 'react';
import { NotificationProvider, NotificationCenter } from '@tribux/ui';
import HomePage from './pages/home';
import { LoginPage, CreateUserPage, PasswordRecoveryRequestPage } from './pages/auth';
import Menu from './pages/menu';
import Dashboard from './pages/dashboard';
import InvoicesList from './pages/invoices';
import InvoiceCreate from './pages/invoices/create';
import InvoiceView from './pages/invoices/view';

function App(): React.JSX.Element {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Listen for navigation changes
    const handleNavigation = () => {
      setCurrentPath(window.location.pathname);
      console.log('Navigation to:', window.location.pathname);
    };

    // Try multiple event listeners
    window.addEventListener('single-spa:routing-event', handleNavigation);
    window.addEventListener('popstate', handleNavigation);

    // Also check for path changes periodically
    const interval = setInterval(() => {
      if (window.location.pathname !== currentPath) {
        setCurrentPath(window.location.pathname);
        console.log('Path changed to:', window.location.pathname);
      }
    }, 100);

    return () => {
      window.removeEventListener('single-spa:routing-event', handleNavigation);
      window.removeEventListener('popstate', handleNavigation);
      clearInterval(interval);
    };
  }, [currentPath]);

  const renderContent = () => {
    try {
      // Normalize path
      const path = currentPath || '/';

      console.log('Rendering content for path:', path);

      // Exact path matches first
      if (path === '/' || path === '') {
        return <HomePage />;
      }

      // Auth routes
      if (path === '/auth/login') {
        return <LoginPage />;
      }
      if (path === '/auth/create-user') {
        return <CreateUserPage />;
      }
      if (path === '/auth/forgot-password') {
        return <PasswordRecoveryRequestPage />;
      }

      // Dashboard
      if (path === '/dashboard') {
        return <Dashboard />;
      }

      // Menu
      if (path === '/menu') {
        return <Menu />;
      }

      // Invoice routes
      if (path === '/invoices') {
        return <InvoicesList />;
      }
      if (path === '/invoices/create') {
        return <InvoiceCreate />;
      }
      if (path.startsWith('/invoices/view/')) {
        return <InvoiceView />;
      }

      // Default 404
      console.warn('No route found for path:', path);
      return <div style={{ padding: '20px' }}>Página no encontrada: {path}</div>;
    } catch (error) {
      console.error('Error rendering content:', error);
      return (
        <div style={{ padding: '20px', color: 'red' }}>
          Error cargando la página: {error instanceof Error ? error.message : 'Unknown error'}
        </div>
      );
    }
  };

  return (
    <NotificationProvider>
      {renderContent()}
      <NotificationCenter />
    </NotificationProvider>
  );
}

export default App;