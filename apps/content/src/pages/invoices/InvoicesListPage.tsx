import React, { useState, useEffect } from 'react'
import { navigateToUrl } from 'single-spa'
import { Plus, AlertCircle, Loader2, LayoutGrid, LayoutList, FileText } from 'lucide-react'
import Sidebar from '../../components/dashboard/Sidebar'
import DashboardHeader from '../../components/dashboard/DashboardHeader'
import DashboardFooter from '../../components/dashboard/DashboardFooter'
import { invoicesService, InvoiceSummary } from '../../services'

export default function InvoicesListPage() {
  const [activeItem, setActiveItem] = useState('invoices')
  const [invoices, setInvoices] = useState<InvoiceSummary[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table')

  useEffect(() => {
    console.log('InvoicesListPage mounted')
    loadInvoices()
  }, [])

  const loadInvoices = async () => {
    try {
      setLoading(true)
      setError(null)
      console.log('Loading invoices list...')
      const data = await invoicesService.getAll()
      console.log('Invoices loaded successfully:', data.length, 'invoices')
      setInvoices(data)
    } catch (err) {
      console.error('Error loading invoices:', err)
      setError('Error al cargar las facturas')
    } finally {
      setLoading(false)
    }
  }

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.consecutiveNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (invoice.clave && invoice.clave.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesStatus = statusFilter === 'all' || invoice.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'sent': return 'bg-blue-100 text-blue-800'
      case 'accepted': return 'bg-green-100 text-green-800'
      case 'rejected': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'draft': return 'Borrador'
      case 'sent': return 'Enviada'
      case 'accepted': return 'Aceptada'
      case 'rejected': return 'Rechazada'
      default: return status
    }
  }

  const handleViewInvoice = (invoice: InvoiceSummary) => {
    navigateToUrl(`/invoices/view?id=${invoice.id}`)
  }

  const handleDownloadXml = async (invoice: InvoiceSummary) => {
    try {
      const xml = await invoicesService.getXml(invoice.id)
      const blob = new Blob([xml], { type: 'application/xml' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `Factura_${invoice.consecutiveNumber}.xml`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading XML:', error)
    }
  }

  const handleDownloadPdf = async (invoice: InvoiceSummary) => {
    try {
      const pdfBlob = await invoicesService.getPdf(invoice.id)
      const url = URL.createObjectURL(pdfBlob)
      const a = document.createElement('a')
      a.href = url
      a.download = `Factura_${invoice.consecutiveNumber}.pdf`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading PDF:', error)
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
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
              <p className="text-gray-600">Cargando facturas...</p>
            </div>
          </main>
        </div>
        <DashboardFooter />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
        <DashboardHeader />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
          <main className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <AlertCircle className="w-8 h-8 mx-auto mb-4 text-red-600" />
              <p className="text-gray-600">{error}</p>
              <button
                onClick={loadInvoices}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Reintentar
              </button>
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
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Facturas</h1>
                <p className="text-gray-600">Gestiona y visualiza todas tus facturas</p>
              </div>
              <button
                onClick={() => navigateToUrl('/invoices/create')}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl font-medium"
              >
                <Plus className="w-5 h-5" />
                <span>Nueva Factura</span>
              </button>
            </div>

            {/* Stats */}
            <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg">
                <p className="text-sm font-medium opacity-90">Total de Facturas</p>
                <p className="text-3xl font-bold mt-2">{invoices.length}</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg">
                <p className="text-sm font-medium opacity-90">Monto Total</p>
                <p className="text-3xl font-bold mt-2">₡{invoices.reduce((sum, inv) => sum + inv.total, 0).toLocaleString()}</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-6 text-white shadow-lg">
                <p className="text-sm font-medium opacity-90">En Borrador</p>
                <p className="text-3xl font-bold mt-2">{invoices.filter(inv => inv.status === 'draft').length}</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
                <p className="text-sm font-medium opacity-90">Enviadas</p>
                <p className="text-3xl font-bold mt-2">{invoices.filter(inv => inv.status === 'sent').length}</p>
              </div>
            </div>

            {/* Filters */}
            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar por número, cliente o clave..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="all">Todos los estados</option>
                <option value="draft">Borrador</option>
                <option value="sent">Enviada</option>
                <option value="accepted">Aceptada</option>
                <option value="rejected">Rechazada</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="mb-6 flex justify-end space-x-2">
              <button
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'table'
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <LayoutList className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
            </div>

            {/* Invoices Table/Grid View */}
            {viewMode === 'table' ? (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                {filteredInvoices.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Número</th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Cliente</th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Fecha</th>
                          <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase">Monto</th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Estado</th>
                          <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase">Acciones</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {filteredInvoices.map((invoice) => (
                          <tr key={invoice.id} className="hover:bg-gray-50">
                            <td className="px-6 py-3 font-medium text-gray-900">{invoice.consecutiveNumber}</td>
                            <td className="px-6 py-3 text-gray-700">{invoice.client}</td>
                            <td className="px-6 py-3 text-sm text-gray-600">{invoice.date}</td>
                            <td className="px-6 py-3 text-right font-semibold">₡{invoice.total.toLocaleString()}</td>
                            <td className="px-6 py-3">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(invoice.status)}`}>
                                {getStatusText(invoice.status)}
                              </span>
                            </td>
                            <td className="px-6 py-3 text-center">
                              <button onClick={() => handleViewInvoice(invoice)} className="text-blue-600 hover:text-blue-800 mr-2">
                                Ver
                              </button>
                              <button onClick={() => handleDownloadXml(invoice)} className="text-green-600 hover:text-green-800 mr-2">
                                XML
                              </button>
                              <button onClick={() => handleDownloadPdf(invoice)} className="text-red-600 hover:text-red-800">
                                PDF
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="p-12 text-center">
                    <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">No se encontraron facturas</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredInvoices.length > 0 ? (
                  filteredInvoices.map((invoice) => (
                    <div key={invoice.id} className="bg-white rounded-lg shadow p-4 border border-gray-200 hover:shadow-lg">
                      <div className="flex justify-between items-start mb-3">
                        <p className="font-semibold">{invoice.consecutiveNumber}</p>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(invoice.status)}`}>
                          {getStatusText(invoice.status)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">Cliente: {invoice.client}</p>
                      <p className="text-sm text-gray-600 mb-3">Total: ₡{invoice.total.toLocaleString()}</p>
                      <div className="flex space-x-2">
                        <button onClick={() => handleViewInvoice(invoice)} className="flex-1 bg-blue-100 text-blue-600 py-2 rounded text-sm">Ver</button>
                        <button onClick={() => handleDownloadXml(invoice)} className="flex-1 bg-green-100 text-green-600 py-2 rounded text-sm">XML</button>
                        <button onClick={() => handleDownloadPdf(invoice)} className="flex-1 bg-red-100 text-red-600 py-2 rounded text-sm">PDF</button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">No se encontraron facturas</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
      <DashboardFooter />
    </div>
  )
}