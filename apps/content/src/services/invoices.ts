import api from './axios'

export interface Invoice {
  id: string
  consecutiveNumber: string
  client: string
  date: string
  total: number
  status: 'draft' | 'sent' | 'accepted'
}

export interface InvoiceLine {
  id: string
  product: string
  quantity: number
  price: number
  tax: number
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
  async getAll(): Promise<Invoice[]> {
    const response = await api.get('/invoices')
    return response.data
  },

  async getById(id: string): Promise<InvoiceDetail> {
    const response = await api.get(`/invoices/${id}`)
    return response.data
  },

  async create(invoice: Omit<Invoice, 'id'>): Promise<Invoice> {
    const response = await api.post('/invoices', invoice)
    return response.data
  },

  async addLine(invoiceId: string, line: Omit<InvoiceLine, 'id'>): Promise<InvoiceLine> {
    const response = await api.post(`/invoices/${invoiceId}/line`, line)
    return response.data
  },

  async getStatsSummary(): Promise<StatsSummary> {
    const response = await api.get('/stats/summary')
    return response.data
  },

  async getStatsByMonth(): Promise<MonthlyStats[]> {
    const response = await api.get('/stats/by-month')
    return response.data
  },
}