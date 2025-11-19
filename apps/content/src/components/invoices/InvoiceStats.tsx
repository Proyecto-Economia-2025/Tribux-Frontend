import React from 'react'
import { FileText, DollarSign, Eye, CheckCircle } from 'lucide-react'

interface InvoiceStatsProps {
  totalInvoices: number
  totalAmount: number
  draftCount: number
  sentCount: number
}

export default function InvoiceStats({
  totalInvoices,
  totalAmount,
  draftCount,
  sentCount
}: InvoiceStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-600 uppercase tracking-wider">Total de Facturas</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{totalInvoices}</p>
          </div>
          <FileText className="w-8 h-8 text-blue-500 opacity-20" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-600 uppercase tracking-wider">Monto Total</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">₡{totalAmount.toLocaleString()}</p>
          </div>
          <DollarSign className="w-8 h-8 text-green-500 opacity-20" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-600 uppercase tracking-wider">Borradores</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{draftCount}</p>
          </div>
          <Eye className="w-8 h-8 text-yellow-500 opacity-20" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-600 uppercase tracking-wider">Enviadas</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{sentCount}</p>
          </div>
          <CheckCircle className="w-8 h-8 text-green-500 opacity-20" />
        </div>
      </div>
    </div>
  )
}
