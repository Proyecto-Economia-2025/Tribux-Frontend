import React from 'react'
import { Plus } from 'lucide-react'

interface InvoiceHeaderProps {
  onCreateInvoice: () => void
}

export const InvoicePageHeader: React.FC<InvoiceHeaderProps> = ({ onCreateInvoice }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Lista de Facturas</h1>
        <p className="text-gray-600 mt-2">Gestiona todas tus facturas electrónicas</p>
      </div>
      <button
        onClick={onCreateInvoice}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2 shadow-lg"
      >
        <Plus className="w-5 h-5" />
        <span>Crear Factura</span>
      </button>
    </div>
  )
}
