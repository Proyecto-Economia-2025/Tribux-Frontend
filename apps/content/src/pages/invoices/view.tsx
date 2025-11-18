import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Eye, Download, ArrowLeft, Loader2, AlertCircle, FileText, Calendar, User, Building } from 'lucide-react'
import Sidebar from '../../components/dashboard/Sidebar'
import DashboardHeader from '../../components/dashboard/DashboardHeader'
import DashboardFooter from '../../components/dashboard/DashboardFooter'
import { invoicesService, Invoice } from '../../services'

export default function InvoiceViewPage() {
  const [searchParams] = useSearchParams()
  const invoiceId = searchParams.get('id')

  const [activeItem, setActiveItem] = useState('view')
  const [invoice, setInvoice] = useState<Invoice | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (invoiceId) {
      loadInvoice()
    }
  }, [invoiceId])

  const loadInvoice = async () => {
    if (!invoiceId) return

    try {
      setLoading(true)
      const invoiceData = await invoicesService.getById(parseInt(invoiceId))
      setInvoice(invoiceData)
    } catch (err) {
      console.error('Error loading invoice:', err)
      setError('Error al cargar la factura')
    } finally {
      setLoading(false)
    }
  }

  const handleDownloadXML = async () => {
    if (!invoice) return

    try {
      await invoicesService.downloadXML(invoice.id)
    } catch (error) {
      console.error('Error downloading XML:', error)
      alert('Error al descargar el XML')
    }
  }

  const handleDownloadPDF = async () => {
    if (!invoice) return

    try {
      await invoicesService.downloadPDF(invoice.id)
    } catch (error) {
      console.error('Error downloading PDF:', error)
      alert('Error al descargar el PDF')
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
        <DashboardHeader />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
          <main className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
              <p className="text-gray-600">Cargando factura...</p>
            </div>
          </main>
        </div>
        <DashboardFooter />
      </div>
    )
  }

  if (error || !invoice) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
        <DashboardHeader />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
          <main className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <p className="text-red-600">{error || 'Factura no encontrada'}</p>
            </div>
          </main>
        </div>
        <DashboardFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
      <DashboardHeader />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
        <main className="flex-1 overflow-auto">
          <div className="p-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => window.history.back()}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Volver</span>
                </button>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Factura #{invoice.id}</h1>
                  <p className="text-gray-600 mt-2">Detalles de la factura electrónica</p>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={handleDownloadXML}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>XML</span>
                </button>
                <button
                  onClick={handleDownloadPDF}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>PDF</span>
                </button>
              </div>
            </div>

            {/* Invoice Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Company Info */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center space-x-2 mb-4">
                  <Building className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Empresa Emisora</h3>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-gray-900">{invoice.company?.name}</p>
                  <p className="text-sm text-gray-600">Cédula: {invoice.company?.taxId}</p>
                </div>
              </div>

              {/* Customer Info */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center space-x-2 mb-4">
                  <User className="w-5 h-5 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Cliente Receptor</h3>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-gray-900">{invoice.customer?.name}</p>
                  <p className="text-sm text-gray-600">Cédula: {invoice.customer?.taxId}</p>
                </div>
              </div>

              {/* Invoice Info */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center space-x-2 mb-4">
                  <FileText className="w-5 h-5 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Información</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {new Date(invoice.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Estado: <span className="font-medium">{invoice.status}</span></p>
                  <p className="text-sm text-gray-600">Clave: <span className="font-mono text-xs">{invoice.clave}</span></p>
                </div>
              </div>
            </div>

            {/* Invoice Lines */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Líneas de Factura</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Código
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Descripción
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Cantidad
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Unidad
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Precio Unit.
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Descuentos
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subtotal
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {invoice.lines?.map((line, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {line.prodCodigo}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {line.detalle}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {line.cantidad}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {line.unidadMedida}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ₡{line.precioUnitario.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ₡{line.descuentos.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          ₡{((line.cantidad * line.precioUnitario) - line.descuentos).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Totals */}
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <div className="flex justify-end">
                  <div className="w-64 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="font-medium">₡{invoice.subtotal?.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">IVA (13%):</span>
                      <span className="font-medium">₡{invoice.iva?.toLocaleString()}</span>
                    </div>
                    <div className="border-t border-gray-300 pt-2 flex justify-between">
                      <span className="text-lg font-semibold text-gray-900">Total:</span>
                      <span className="text-lg font-bold text-gray-900">
                        ₡{invoice.total?.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <DashboardFooter />
    </div>
  )
}