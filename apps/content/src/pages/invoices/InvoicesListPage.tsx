import React, { useState, useEffect } from 'react'
import { navigateToUrl } from 'single-spa'
import { Plus, AlertCircle, Loader2, LayoutGrid, LayoutList } from 'lucide-react'
import Sidebar from '../../components/dashboard/Sidebar'
import DashboardHeader from '../../components/dashboard/DashboardHeader'
import DashboardFooter from '../../components/dashboard/DashboardFooter'
import { InvoiceTableRow, InvoiceTableHeader, InvoiceFilterBar, InvoiceEmptyState, InvoiceCard, InvoicePageHeader, InvoiceStats } from '../../components/invoices'
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
      console.log('Invoices loaded:', data)
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
        <main className="flex-1 overflow-auto flex flex-col">
          <div className="p-8 flex-1">
            {/* Header */}
            <InvoicePageHeader onCreateInvoice={() => navigateToUrl('/invoices/create')} />

            {/* Stats */}
            <InvoiceStats
              totalInvoices={invoices.length}
              totalAmount={invoices.reduce((sum, inv) => sum + inv.total, 0)}
              draftCount={invoices.filter(inv => inv.status === 'draft').length}
              sentCount={invoices.filter(inv => inv.status === 'sent').length}
            />

            {/* Filters */}
            <InvoiceFilterBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              statusFilter={statusFilter}
              onStatusFilterChange={setStatusFilter}
            />

            {/* View Mode Toggle */}
            <div className="mb-6 flex justify-end space-x-2">
              <button
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'table'
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
                title="Vista de tabla"
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
                title="Vista de grid"
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
            </div>

            {/* Invoices Table/Grid View */}
            {viewMode === 'table' ? (
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <InvoiceTableHeader />
                    <tbody className="divide-y divide-gray-200">
                      {filteredInvoices.map((invoice) => (
                        <InvoiceTableRow
                          key={invoice.id}
                          invoice={invoice}
                          onView={handleViewInvoice}
                          onDownloadXml={handleDownloadXml}
                          onDownloadPdf={handleDownloadPdf}
                          statusColorClass={getStatusColor(invoice.status)}
                          statusText={getStatusText(invoice.status)}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>

                {filteredInvoices.length === 0 && (
                  <InvoiceEmptyState hasSearchOrFilter={!!searchTerm || statusFilter !== 'all'} />
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredInvoices.length > 0 ? (
                  filteredInvoices.map((invoice) => (
                    <InvoiceCard
                      key={invoice.id}
                      invoice={invoice}
                      onView={handleViewInvoice}
                      onDownloadXml={handleDownloadXml}
                      onDownloadPdf={handleDownloadPdf}
                      statusColorClass={getStatusColor(invoice.status)}
                      statusText={getStatusText(invoice.status)}
                    />
                  ))
                ) : (
                  <div className="col-span-full">
                    <InvoiceEmptyState hasSearchOrFilter={!!searchTerm || statusFilter !== 'all'} />
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