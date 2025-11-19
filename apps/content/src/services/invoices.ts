import api from './axios'

// Backend entity interfaces
export interface Customer {
  id: number
  taxType: string
  taxId: string
  name: string
  email?: string
  phoneCountry?: string
  phoneNumber?: string
  activityCode?: string
  createdAt?: string
  updatedAt?: string
}

export interface Company {
  id: number
  taxId: string
  taxType: string
  name: string
  commercialName?: string
  email?: string
  phoneCountry?: string
  phoneNumber?: string
  defaultActivityCode?: string
  createdAt?: string
  updatedAt?: string
}

export interface InvoiceLine {
  id: number
  invoiceId: number
  lineaNumero: number
  prodCodigo?: string
  prodTipoCodigo?: string
  cantidad: number
  unidadMedida?: string
  detalle?: string
  precioUnitario: number
  montoTotal: number
  subtotal: number
  descuentos?: number
  montoTotalLinea: number
}

export interface InvoiceTaxes {
  id: number
  invoiceId: number
  codigoImpuesto: string
  tarifa?: number
  monto: number
}

export interface Invoice {
  id: number
  companyId: number
  customerId: number
  clave?: string
  numeroConsecutivo?: string
  codigoActividad?: string
  fechaEmision: string
  condicionVenta?: string
  plazoCredito?: number
  medioPago?: string
  moneda?: string
  totalMercanciasGravadas?: number
  totalMercanciasExentas?: number
  totalGravado?: number
  totalExento?: number
  totalVenta?: number
  totalDescuentos?: number
  totalVentaNeta?: number
  totalImpuesto?: number
  totalComprobante?: number
  totalIva?: number
  estado?: string
  notas?: string
  createdAt?: string
  updatedAt?: string
  company?: Company
  customer?: Customer
  invoiceLines?: InvoiceLine[]
  invoiceTaxes?: InvoiceTaxes[]
}

// DTOs for creating/updating
export interface InvoiceLineDto {
  prodCodigo: string
  prodTipoCodigo?: string
  cantidad: number
  unidadMedida: string
  detalle: string
  precioUnitario: number
  descuentos?: number
}

export interface CreateInvoiceRequest {
  companyId: number
  customerId: number
  lines: InvoiceLineDto[]
}

// Frontend-specific interfaces for UI
export interface InvoiceSummary {
  id: number
  consecutiveNumber: string
  client: string
  date: string
  total: number
  status: string
  clave?: string
}

export interface InvoiceDetail extends Invoice {
  lines: InvoiceLine[]
  subtotal: number
  taxTotal: number
}

export interface StatsSummary {
  totalInvoices: number
  totalInvoiced: number
  totalIVA: number
  invoicesToday: number
}

export interface MonthlyStats {
  month: string
  amount: number
}

export const invoicesService = {
  async getAll(): Promise<InvoiceSummary[]> {
    try {
      const response = await api.get<any>('/Invoices')
      // Handle .NET JSON serialization format with $values
      let invoices = response.data
      
      if (invoices?.$values && Array.isArray(invoices.$values)) {
        invoices = invoices.$values
      } else if (!Array.isArray(invoices)) {
        console.warn('API response is not an array or wrapped correctly:', response.data)
        return []
      }

      return invoices.map((invoice: Invoice) => ({
        id: invoice.id,
        consecutiveNumber: invoice.numeroConsecutivo || '',
        client: invoice.customer?.name || 'Cliente desconocido',
        date: new Date(invoice.fechaEmision).toLocaleDateString(),
        total: invoice.totalComprobante || 0,
        status: invoice.estado || 'draft',
        clave: invoice.clave
      }))
    } catch (error) {
      console.error('Error fetching invoices:', error)
      throw error
    }
  },

  async getById(id: number): Promise<InvoiceDetail> {
    try {
      const response = await api.get<Invoice>(`/Invoices/${id}`)
      const invoice = response.data

      return {
        ...invoice,
        lines: invoice.invoiceLines || [],
        subtotal: invoice.totalVentaNeta || 0,
        taxTotal: invoice.totalIva || 0
      }
    } catch (error) {
      console.error('Error fetching invoice:', error)
      throw error
    }
  },

  async create(invoiceData: CreateInvoiceRequest): Promise<Invoice> {
    try {
      const response = await api.post<Invoice>('/Invoices', invoiceData)
      return response.data
    } catch (error) {
      console.error('Error creating invoice:', error)
      throw error
    }
  },

  async update(id: number, invoice: Partial<Invoice>): Promise<Invoice> {
    try {
      const response = await api.put<Invoice>(`/Invoices/${id}`, invoice)
      return response.data
    } catch (error) {
      console.error('Error updating invoice:', error)
      throw error
    }
  },

  async delete(id: number): Promise<void> {
    try {
      await api.delete(`/Invoices/${id}`)
    } catch (error) {
      console.error('Error deleting invoice:', error)
      throw error
    }
  },

  async getXml(id: number): Promise<string> {
    try {
      const response = await api.get(`/Invoices/${id}/xml`, {
        responseType: 'text'
      })
      return response.data
    } catch (error) {
      console.error('Error fetching invoice XML:', error)
      throw error
    }
  },

  async getPdf(id: number): Promise<Blob> {
    try {
      const response = await api.get(`/Invoices/${id}/pdf`, {
        responseType: 'blob'
      })
      return response.data
    } catch (error) {
      console.error('Error fetching invoice PDF:', error)
      throw error
    }
  },

  async getStatsSummary(): Promise<StatsSummary> {
    try {
      // This endpoint might not exist yet, so we'll calculate from invoices
      const invoices = await this.getAll()
      const today = new Date().toDateString()

      const stats = {
        totalInvoices: invoices.length,
        totalInvoiced: invoices.reduce((sum, inv) => sum + inv.total, 0),
        totalIVA: invoices.reduce((sum, inv) => sum + (inv.total * 0.13), 0), // Assuming 13% IVA
        invoicesToday: invoices.filter(inv => new Date(inv.date).toDateString() === today).length
      }
      
      console.log('Stats summary calculated:', stats)
      return stats
    } catch (error) {
      console.error('Error fetching stats summary:', error)
      throw error
    }
  },

  async getStatsByMonth(): Promise<MonthlyStats[]> {
    try {
      const invoices = await this.getAll()
      const monthlyData: { [key: string]: number } = {}

      invoices.forEach(invoice => {
        const month = new Date(invoice.date).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })
        monthlyData[month] = (monthlyData[month] || 0) + invoice.total
      })

      const stats = Object.entries(monthlyData).map(([month, amount]) => ({
        month,
        amount
      }))
      
      console.log('Monthly stats calculated:', stats)
      return stats
    } catch (error) {
      console.error('Error fetching monthly stats:', error)
      throw error
    }
  },

  // Additional utility methods
  async getCompanies(): Promise<Company[]> {
    try {
      const response = await api.get<any>('/Companies')
      // Handle .NET JSON serialization format with $values
      let companies = response.data
      
      if (companies?.$values && Array.isArray(companies.$values)) {
        companies = companies.$values
      } else if (!Array.isArray(companies)) {
        console.warn('API response is not an array:', response.data)
        return []
      }
      
      return companies
    } catch (error) {
      console.error('Error fetching companies:', error)
      throw error
    }
  },

  async getCompanyById(id: number): Promise<Company> {
    try {
      const response = await api.get<any>(`/Companies/${id}`)
      // Handle .NET JSON serialization format
      let company = response.data
      
      if (company?.$values) {
        company = company.$values[0]
      }
      
      return company
    } catch (error) {
      console.error('Error fetching company:', error)
      throw error
    }
  }
}