import api from './axios'

// Re-export types from invoices service
export type { Company, Customer, Invoice, InvoiceLine, InvoiceSummary, InvoiceDetail, CreateInvoiceRequest, InvoiceLineDto } from './invoices'

export interface ActivityCode {
  code: string
  description?: string
}

export const activityCodesService = {
  async getAll(): Promise<ActivityCode[]> {
    try {
      const response = await api.get<any>('/ActivityCodes')
      // Handle .NET JSON serialization format with $values
      let codes = response.data
      
      if (codes?.$values && Array.isArray(codes.$values)) {
        codes = codes.$values
      } else if (!Array.isArray(codes)) {
        console.warn('API response is not an array:', response.data)
        return []
      }
      
      return codes
    } catch (error) {
      console.error('Error fetching activity codes:', error)
      throw error
    }
  },

  async getByCode(code: string): Promise<ActivityCode> {
    try {
      const response = await api.get<any>(`/ActivityCodes/${code}`)
      // Handle .NET JSON serialization format
      let activityCode = response.data
      
      if (activityCode?.$values) {
        activityCode = activityCode.$values[0]
      }
      
      return activityCode
    } catch (error) {
      console.error('Error fetching activity code:', error)
      throw error
    }
  }
}

export const companiesService = {
  async getAll(): Promise<Company[]> {
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

  async getById(id: number): Promise<Company> {
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
  },

  async create(company: Omit<Company, 'id' | 'createdAt' | 'updatedAt'>): Promise<Company> {
    try {
      const response = await api.post<Company>('/Companies', company)
      return response.data
    } catch (error) {
      console.error('Error creating company:', error)
      throw error
    }
  },

  async update(id: number, company: Partial<Company>): Promise<Company> {
    try {
      const response = await api.put<Company>(`/Companies/${id}`, company)
      return response.data
    } catch (error) {
      console.error('Error updating company:', error)
      throw error
    }
  },

  async delete(id: number): Promise<void> {
    try {
      await api.delete(`/Companies/${id}`)
    } catch (error) {
      console.error('Error deleting company:', error)
      throw error
    }
  }
}

// Authentication service (for future use)
export const authService = {
  async login(credentials: { username: string; password: string }) {
    try {
      // This endpoint might not exist yet, so we'll use a mock for now
      if (credentials.username === 'admin' && credentials.password === 'admin') {
        const token = 'mock-jwt-token'
        localStorage.setItem('authToken', token)
        return { success: true, token }
      }
      throw new Error('Invalid credentials')
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  },

  logout() {
    localStorage.removeItem('authToken')
  },

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken')
  }
}