import React from 'react'
import { Eye, Download, FileText } from 'lucide-react'
import { InvoiceSummary } from '../../services'

interface InvoiceCardProps {
  invoice: InvoiceSummary
  onView: (invoice: InvoiceSummary) => void
  onDownloadXml: (invoice: InvoiceSummary) => void
  onDownloadPdf: (invoice: InvoiceSummary) => void
  statusColorClass: string
  statusText: string
}

export const InvoiceCard: React.FC<InvoiceCardProps> = ({
  invoice,
  onView,
  onDownloadXml,
  onDownloadPdf,
  statusColorClass,
  statusText
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-sm font-semibold text-gray-900">{invoice.consecutiveNumber}</p>
          {invoice.clave && (
            <p className="text-xs text-gray-500 truncate">{invoice.clave.substring(0, 21)}...</p>
          )}
        </div>
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColorClass}`}>
          {statusText}
        </span>
      </div>

      <div className="space-y-2 mb-4">
        <div>
          <p className="text-xs text-gray-500">Cliente</p>
          <p className="text-sm text-gray-900">{invoice.client}</p>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-xs text-gray-500">Fecha</p>
            <p className="text-sm text-gray-900">{invoice.date}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Total</p>
            <p className="text-sm font-medium text-gray-900">₡{invoice.total.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
        <button
          onClick={() => onView(invoice)}
          className="flex-1 text-blue-600 hover:text-blue-900 p-2 rounded hover:bg-blue-50 transition-colors flex items-center justify-center space-x-1 text-sm"
          title="Ver factura"
        >
          <Eye className="w-4 h-4" />
          <span>Ver</span>
        </button>
        <button
          onClick={() => onDownloadXml(invoice)}
          className="flex-1 text-green-600 hover:text-green-900 p-2 rounded hover:bg-green-50 transition-colors flex items-center justify-center space-x-1 text-sm"
          title="Descargar XML"
        >
          <Download className="w-4 h-4" />
          <span>XML</span>
        </button>
        <button
          onClick={() => onDownloadPdf(invoice)}
          className="flex-1 text-purple-600 hover:text-purple-900 p-2 rounded hover:bg-purple-50 transition-colors flex items-center justify-center space-x-1 text-sm"
          title="Descargar PDF"
        >
          <FileText className="w-4 h-4" />
          <span>PDF</span>
        </button>
      </div>
    </div>
  )
}
