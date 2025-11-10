import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotificationProvider, NotificationCenter } from '@tribux/ui';
import HomePage from './pages/home';
import { LoginPage, CreateUserPage, PasswordRecoveryRequestPage } from './pages/auth';

function App(): React.JSX.Element {
  return (
    <NotificationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/create-user" element={<CreateUserPage />} />
          <Route path="/auth/forgot-password" element={<PasswordRecoveryRequestPage />} />
        </Routes>
      </Router>
      <NotificationCenter />
    </NotificationProvider>
  );
}

export default App;