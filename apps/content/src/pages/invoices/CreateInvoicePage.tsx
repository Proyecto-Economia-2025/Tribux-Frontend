import React, { useState, useEffect } from 'react'
import { Plus, Minus, Save, X, Search, AlertCircle, Loader2, User, Building } from 'lucide-react'
import Sidebar from '../../components/dashboard/Sidebar'
import DashboardHeader from '../../components/dashboard/DashboardHeader'
import DashboardFooter from '../../components/dashboard/DashboardFooter'
import { invoicesService, customersService, companiesService, Customer, Company, CreateInvoiceRequest, InvoiceLineDto } from '../../services'

interface InvoiceLineForm {
  prodCodigo: string
  prodTipoCodigo: string
  cantidad: number
  unidadMedida: string
  detalle: string
  precioUnitario: number
  descuentos: number
}

export default function CreateInvoicePage() {
  const [activeItem, setActiveItem] = useState('create')
  const [loading, setLoading] = useState(false)
  const [customers, setCustomers] = useState<Customer[]>([])
  const [companies, setCompanies] = useState<Company[]>([])
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null)
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null)
  const [lines, setLines] = useState<InvoiceLineForm[]>([{
    prodCodigo: '',
    prodTipoCodigo: '01', // Default to merchandise
    cantidad: 1,
    unidadMedida: 'Unidad',
    detalle: '',
    precioUnitario: 0,
    descuentos: 0
  }])

  const [customerSearch, setCustomerSearch] = useState('')
  const [companySearch, setCompanySearch] = useState('')
  const [showCustomerDropdown, setShowCustomerDropdown] = useState(false)
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false)

  useEffect(() => {
    loadInitialData()
  }, [])

  const loadInitialData = async () => {
    try {
      const [customersData, companiesData] = await Promise.all([
        customersService.getAll(),
        companiesService.getAll()
      ])
      setCustomers(customersData)
      setCompanies(companiesData)

      // Auto-select first company if available
      if (companiesData.length > 0) {
        setSelectedCompany(companiesData[0])
      }
    } catch (error) {
      console.error('Error loading initial data:', error)
    }
  }

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(customerSearch.toLowerCase()) ||
    customer.taxId.includes(customerSearch)
  )

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(companySearch.toLowerCase()) ||
    company.taxId.includes(companySearch)
  )

  const addLine = () => {
    setLines([...lines, {
      prodCodigo: '',
      prodTipoCodigo: '01',
      cantidad: 1,
      unidadMedida: 'Unidad',
      detalle: '',
      precioUnitario: 0,
      descuentos: 0
    }])
  }

  const removeLine = (index: number) => {
    if (lines.length > 1) {
      setLines(lines.filter((_, i) => i !== index))
    }
  }

  const updateLine = (index: number, field: keyof InvoiceLineForm, value: string | number) => {
    const updatedLines = [...lines]
    updatedLines[index] = { ...updatedLines[index], [field]: value }
    setLines(updatedLines)
  }

  const calculateSubtotal = (line: InvoiceLineForm) => {
    return (line.cantidad * line.precioUnitario) - line.descuentos
  }

  const calculateTotal = () => {
    return lines.reduce((total, line) => total + calculateSubtotal(line), 0)
  }

  const calculateIVA = () => {
    return calculateTotal() * 0.13 // 13% IVA
  }

  const calculateTotalWithIVA = () => {
    return calculateTotal() + calculateIVA()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedCustomer || !selectedCompany) {
      alert('Debe seleccionar un cliente y una empresa')
      return
    }

    if (lines.some(line => !line.prodCodigo || !line.detalle || line.precioUnitario <= 0)) {
      alert('Todos los campos de las líneas son obligatorios y el precio debe ser mayor a 0')
      return
    }

    try {
      setLoading(true)

      const invoiceData: CreateInvoiceRequest = {
        companyId: selectedCompany.id,
        customerId: selectedCustomer.id,
        lines: lines.map(line => ({
          prodCodigo: line.prodCodigo,
          prodTipoCodigo: line.prodTipoCodigo,
          cantidad: line.cantidad,
          unidadMedida: line.unidadMedida,
          detalle: line.detalle,
          precioUnitario: line.precioUnitario,
          descuentos: line.descuentos
        }))
      }

      const createdInvoice = await invoicesService.create(invoiceData)
      alert(`Factura creada exitosamente con ID: ${createdInvoice.id}`)

      // Reset form
      setSelectedCustomer(null)
      setLines([{
        prodCodigo: '',
        prodTipoCodigo: '01',
        cantidad: 1,
        unidadMedida: 'Unidad',
        detalle: '',
        precioUnitario: 0,
        descuentos: 0
      }])

    } catch (error) {
      console.error('Error creating invoice:', error)
      alert('Error al crear la factura. Por favor, inténtelo de nuevo.')
    } finally {
      setLoading(false)
    }
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
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Crear Nueva Factura</h1>
                <p className="text-gray-600 mt-2">Complete la información para generar una factura electrónica</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company and Customer Selection */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Company Selection */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-center space-x-2 mb-4">
                    <Building className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Empresa Emisora</h3>
                  </div>

                  <div className="relative">
                    <div className="relative">
                      <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Buscar empresa..."
                        value={companySearch}
                        onChange={(e) => {
                          setCompanySearch(e.target.value)
                          setShowCompanyDropdown(true)
                        }}
                        onFocus={() => setShowCompanyDropdown(true)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {showCompanyDropdown && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {filteredCompanies.map((company) => (
                          <div
                            key={company.id}
                            onClick={() => {
                              setSelectedCompany(company)
                              setCompanySearch(company.name)
                              setShowCompanyDropdown(false)
                            }}
                            className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                          >
                            <div className="font-medium text-gray-900">{company.name}</div>
                            <div className="text-sm text-gray-500">{company.taxId}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {selectedCompany && (
                    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="font-medium text-blue-900">{selectedCompany.name}</div>
                      <div className="text-sm text-blue-700">Cédula: {selectedCompany.taxId}</div>
                    </div>
                  )}
                </div>

                {/* Customer Selection */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-center space-x-2 mb-4">
                    <User className="w-5 h-5 text-green-600" />
                    <h3 className="text-lg font-semibold text-gray-900">Cliente Receptor</h3>
                  </div>

                  <div className="relative">
                    <div className="relative">
                      <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Buscar cliente..."
                        value={customerSearch}
                        onChange={(e) => {
                          setCustomerSearch(e.target.value)
                          setShowCustomerDropdown(true)
                        }}
                        onFocus={() => setShowCustomerDropdown(true)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    {showCustomerDropdown && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {filteredCustomers.map((customer) => (
                          <div
                            key={customer.id}
                            onClick={() => {
                              setSelectedCustomer(customer)
                              setCustomerSearch(customer.name)
                              setShowCustomerDropdown(false)
                            }}
                            className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                          >
                            <div className="font-medium text-gray-900">{customer.name}</div>
                            <div className="text-sm text-gray-500">{customer.taxId}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {selectedCustomer && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="font-medium text-green-900">{selectedCustomer.name}</div>
                      <div className="text-sm text-green-700">Cédula: {selectedCustomer.taxId}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Invoice Lines */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Líneas de Factura</h3>
                  <button
                    type="button"
                    onClick={addLine}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Agregar Línea</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {lines.map((line, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-medium text-gray-900">Línea {index + 1}</h4>
                        {lines.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeLine(index)}
                            className="text-red-600 hover:text-red-800 p-1"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Código Producto
                          </label>
                          <input
                            type="text"
                            value={line.prodCodigo}
                            onChange={(e) => updateLine(index, 'prodCodigo', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tipo Código
                          </label>
                          <select
                            value={line.prodTipoCodigo}
                            onChange={(e) => updateLine(index, 'prodTipoCodigo', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="01">Código del vendedor</option>
                            <option value="02">Código del comprador</option>
                            <option value="03">Código de uso interno</option>
                            <option value="04">Código de la agencia tributaria</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Cantidad
                          </label>
                          <input
                            type="number"
                            min="0.01"
                            step="0.01"
                            value={line.cantidad}
                            onChange={(e) => updateLine(index, 'cantidad', parseFloat(e.target.value) || 0)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Unidad de Medida
                          </label>
                          <input
                            type="text"
                            value={line.unidadMedida}
                            onChange={(e) => updateLine(index, 'unidadMedida', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Detalle/Descripción
                          </label>
                          <input
                            type="text"
                            value={line.detalle}
                            onChange={(e) => updateLine(index, 'detalle', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Precio Unitario
                          </label>
                          <input
                            type="number"
                            min="0"
                            step="0.01"
                            value={line.precioUnitario}
                            onChange={(e) => updateLine(index, 'precioUnitario', parseFloat(e.target.value) || 0)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Descuentos
                          </label>
                          <input
                            type="number"
                            min="0"
                            step="0.01"
                            value={line.descuentos}
                            onChange={(e) => updateLine(index, 'descuentos', parseFloat(e.target.value) || 0)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="text-right">
                          <span className="text-sm text-gray-600">Subtotal: </span>
                          <span className="font-semibold text-gray-900">
                            ₡{calculateSubtotal(line).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Totals */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Resumen de Factura</h3>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">₡{calculateTotal().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">IVA (13%):</span>
                    <span className="font-medium">₡{calculateIVA().toLocaleString()}</span>
                  </div>
                  <div className="border-t border-gray-300 pt-2 flex justify-between">
                    <span className="text-lg font-semibold text-gray-900">Total:</span>
                    <span className="text-lg font-bold text-gray-900">
                      ₡{calculateTotalWithIVA().toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading || !selectedCustomer || !selectedCompany}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 shadow-lg"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Save className="w-5 h-5" />
                  )}
                  <span>{loading ? 'Creando...' : 'Crear Factura'}</span>
                </button>
              </div>
            </form>
          </div>
        </main>
      </div>
      <DashboardFooter />
    </div>
  )
}