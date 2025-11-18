import React, { useState } from 'react';
import { AlertCircle, Loader2, Mail } from 'lucide-react';
import { AuthLayout, Alert } from '@tribux/ui';
import { navigateToUrl } from 'single-spa';

export default function PasswordRecoveryRequestPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  async function handleRequestRecovery(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email) {
      setError('Por favor ingrese su email');
      return;
    }

    setLoading(true);

    try {
      // TODO: Implement password recovery logic
      console.log('Password recovery request for:', email);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSuccess('Códigos enviados exitosamente a su email');

      // Simulate navigation to verification page
      setTimeout(() => {
        navigateToUrl('/auth/login');
      }, 2000);

    } catch (err) {
      console.error('Error en solicitud de recuperación:', err);
      setError('Error inesperado al solicitar recuperación');
    } finally {
      setLoading(false);
    }
  }

  const handleBack = () => {
    navigateToUrl('/auth/login');
  };

  return (
    <AuthLayout
      title="Recuperar Contraseña"
      description="Ingresa tu email para recibir códigos de recuperación"
      showBackButton={true}
      onBackClick={handleBack}
      backButtonText="Volver al inicio de sesión"
    >
      {/* Success Alert */}
      {success && (
        <Alert
          type="success"
          message={success}
          dismissible={true}
          onDismiss={() => setSuccess('')}
        />
      )}

      {/* Error Alert */}
      {error && (
        <Alert
          type="danger"
          message={error}
          dismissible={true}
          onDismiss={() => setError('')}
        />
      )}

      {/* Recovery Request Form */}
      <form onSubmit={handleRequestRecovery} className="space-y-6">
        <div className="space-y-4">
          <label htmlFor="recovery-email" className="text-base font-semibold">
            Correo Electrónico
          </label>
          <input
            id="recovery-email"
            type="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            placeholder="usuario@ejemplo.com"
            disabled={loading}
            autoComplete="email"
            required
            className="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-xs text-gray-500">
            Ingresa el email asociado a tu cuenta
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full h-12 bg-blue-600 text-white text-base font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Enviando códigos...
            </>
          ) : (
            <>
              <Mail className="h-5 w-5" />
              Enviar códigos de recuperación
            </>
          )}
        </button>
      </form>
    </AuthLayout>
  );
}
