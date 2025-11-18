import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@tribux/ui'

export default function Menu() {
  const navigate = useNavigate()

  const menuOptions = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Lista de Facturas', path: '/invoices' },
    { label: 'Crear Factura', path: '/invoices/create' },
    { label: 'Ver Factura', path: '/invoices/view' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-8">Menú Principal</h1>
        <div className="space-y-4">
          {menuOptions.map((option) => (
            <Button
              key={option.path}
              onClick={() => navigate(option.path)}
              className="w-full"
              size="lg"
            >
              {option.label}
            </Button>
          ))}
        </div>
        <Button
          onClick={() => navigate('/auth/login')}
          variant="outline"
          className="w-full mt-8"
        >
          Cerrar Sesión
        </Button>
      </div>
    </div>
  )
}