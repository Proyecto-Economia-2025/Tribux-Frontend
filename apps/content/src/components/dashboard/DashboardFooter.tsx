import React from 'react'

export default function DashboardFooter() {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Tribux. Todos los derechos reservados.
        </p>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span>v1.0.0</span>
          <span>•</span>
          <span>Servicio Digital Tributario</span>
        </div>
      </div>
    </footer>
  )
}