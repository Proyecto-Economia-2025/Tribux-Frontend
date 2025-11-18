import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotificationProvider, NotificationCenter } from '@tribux/ui';
import HomePage from './pages/home';
import { LoginPage, CreateUserPage, PasswordRecoveryRequestPage } from './pages/auth';
import Menu from './pages/menu';
import Dashboard from './pages/dashboard';
import InvoicesList from './pages/invoices';
import InvoiceCreate from './pages/invoices/create';
import InvoiceView from './pages/invoices/view';

function App(): React.JSX.Element {
  return (
    <NotificationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/create-user" element={<CreateUserPage />} />
          <Route path="/auth/forgot-password" element={<PasswordRecoveryRequestPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/invoices" element={<InvoicesList />} />
          <Route path="/invoices/create" element={<InvoiceCreate />} />
          <Route path="/invoices/view" element={<InvoiceView />} />
        </Routes>
      </Router>
      <NotificationCenter />
    </NotificationProvider>
  );
}

export default App;