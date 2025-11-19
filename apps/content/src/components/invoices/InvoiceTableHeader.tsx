import React from 'react'

export const InvoiceTableHeader: React.FC = () => {
  return (
    <thead className="bg-gray-50 border-b border-gray-200">
      <tr>
        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Número
        </th>
        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Cliente
        </th>
        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Fecha
        </th>
        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Total
        </th>
        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Estado
        </th>
        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Acciones
        </th>
      </tr>
    </thead>
  )
}
