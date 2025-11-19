import React from 'react'
import { Eye, Download, FileText } from 'lucide-react'
import { InvoiceSummary } from '../../services'

interface InvoiceTableRowProps {
  invoice: InvoiceSummary
  onView: (invoice: InvoiceSummary) => void
  onDownloadXml: (invoice: InvoiceSummary) => void
  onDownloadPdf: (invoice: InvoiceSummary) => void
  statusColorClass: string
  statusText: string
}

export const InvoiceTableRow: React.FC<InvoiceTableRowProps> = ({
  invoice,
  onView,
  onDownloadXml,
  onDownloadPdf,
  statusColorClass,
  statusText
}) => {
  return (
    <tr className="hover:bg-gray-50 transition-colors duration-150">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">
          {invoice.consecutiveNumber}
        </div>
        {invoice.clave && (
          <div className="text-xs text-gray-500">
            {invoice.clave.substring(0, 21)}...
          </div>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{invoice.client}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{invoice.date}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">
          ₡{invoice.total.toLocaleString()}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColorClass}`}>
          {statusText}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onView(invoice)}
            className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50 transition-colors"
            title="Ver factura"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDownloadXml(invoice)}
            className="text-green-600 hover:text-green-900 p-1 rounded hover:bg-green-50 transition-colors"
            title="Descargar XML"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDownloadPdf(invoice)}
            className="text-purple-600 hover:text-purple-900 p-1 rounded hover:bg-purple-50 transition-colors"
            title="Descargar PDF"
          >
            <FileText className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  )
}
