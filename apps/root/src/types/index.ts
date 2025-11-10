// User types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'moderator';
  createdAt: Date;
  updatedAt: Date;
}

// Invoice/Factura types
export interface Invoice {
  id: string;
  number: string;
  clientId: string;
  amount: number;
  currency: string;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  issueDate: Date;
  dueDate: Date;
  description?: string;
  items: InvoiceItem[];
  createdAt: Date;
  updatedAt: Date;
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

// Tax error types
export interface TaxError {
  id: string;
  invoiceId?: string;
  type: 'validation' | 'calculation' | 'submission' | 'compliance';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  description?: string;
  resolved: boolean;
  resolvedAt?: Date;
  createdAt: Date;
}

// Report types
export interface Report {
  id: string;
  title: string;
  type: 'monthly' | 'quarterly' | 'annual' | 'custom';
  period: {
    start: Date;
    end: Date;
  };
  data: Record<string, any>;
  generatedAt: Date;
  generatedBy: string;
}