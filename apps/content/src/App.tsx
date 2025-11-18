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
    };

    window.addEventListener('single-spa:routing-event', handleNavigation);
    window.addEventListener('popstate', handleNavigation);

    return () => {
      window.removeEventListener('single-spa:routing-event', handleNavigation);
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  const renderContent = () => {
    try {
      if (currentPath === '/' || currentPath === '') {
        return <HomePage />;
      }
      if (currentPath === '/menu') {
        return <Menu />;
      }
      if (currentPath === '/dashboard') {
        return <Dashboard />;
      }
      if (currentPath === '/invoices') {
        return <InvoicesList />;
      }
      if (currentPath === '/invoices/create') {
        return <InvoiceCreate />;
      }
      if (currentPath.startsWith('/invoices/view')) {
        return <InvoiceView />;
      }
      if (currentPath === '/auth/login') {
        return <LoginPage />;
      }
      if (currentPath === '/auth/create-user') {
        return <CreateUserPage />;
      }
      if (currentPath === '/auth/forgot-password') {
        return <PasswordRecoveryRequestPage />;
      }

      return <div>Página no encontrada: {currentPath}</div>;
    } catch (error) {
      console.error('Error rendering content:', error);
      return <div>Error cargando la página</div>;
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