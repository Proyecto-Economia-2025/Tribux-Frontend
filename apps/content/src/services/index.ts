// Main services exports
export { default as api } from './axios'
export * from './invoices'
export * from './customers'
export * from './companies'

// Re-export types for convenience
export type {
  Customer,
  Company,
  Invoice,
  InvoiceLine,
  InvoiceSummary,
  InvoiceDetail,
  CreateInvoiceRequest,
  InvoiceLineDto,
  ActivityCode
} from './companies'