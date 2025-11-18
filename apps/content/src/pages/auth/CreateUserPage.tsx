import React from 'react';
import { UserPlus } from 'lucide-react';
import { AuthLayout } from '@tribux/ui';
import { navigateToUrl } from 'single-spa';

export default function CreateUserPage() {
  const handleBack = () => {
    navigateToUrl('/auth/login');
  };

  return (
    <AuthLayout
      title="Crear Usuario"
      description="Formulario de registro próximamente"
      showBackButton={true}
      onBackClick={handleBack}
      backButtonText="Volver al inicio de sesión"
    >
      <div className="space-y-4 text-center">
        <div className="p-6 rounded-lg bg-gray-50 border-2 border-dashed border-gray-300">
          <UserPlus className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-semibold mb-2">Registro de Usuarios</h3>
          <p className="text-gray-600 mb-4">
            El registro de nuevos usuarios debe ser realizado por un administrador del sistema.
          </p>
          <p className="text-sm text-gray-500">
            Contacta al administrador para crear tu cuenta de usuario.
          </p>
        </div>

        <button
          onClick={handleBack}
          className="w-full h-12 bg-gray-600 text-white text-base font-semibold rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Volver al Inicio de Sesión
        </button>
      </div>
    </AuthLayout>
  );
}