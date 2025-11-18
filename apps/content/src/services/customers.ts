import api from './axios'

// Re-export Customer interface from invoices.ts for consistency
export type { Customer } from './invoices'

export interface CreateCustomerRequest {
  taxType: string
  taxId: string
  name: string
  email?: string
  phoneCountry?: string
  phoneNumber?: string
  activityCode?: string
}

export const customersService = {
  async getAll(): Promise<Customer[]> {
    try {
      const response = await api.get<Customer[]>('/Customers')
      return response.data
    } catch (error) {
      console.error('Error fetching customers:', error)
      throw error
    }
  },

  async getById(id: number): Promise<Customer> {
    try {
      const response = await api.get<Customer>(`/Customers/${id}`)
      return response.data
    } catch (error) {
      console.error('Error fetching customer:', error)
      throw error
    }
  },

  async create(customer: CreateCustomerRequest): Promise<Customer> {
    try {
      const response = await api.post<Customer>('/Customers', customer)
      return response.data
    } catch (error) {
      console.error('Error creating customer:', error)
      throw error
    }
  },

  async update(id: number, customer: Partial<Customer>): Promise<Customer> {
    try {
      const response = await api.put<Customer>(`/Customers/${id}`, customer)
      return response.data
    } catch (error) {
      console.error('Error updating customer:', error)
      throw error
    }
  },

  async delete(id: number): Promise<void> {
    try {
      await api.delete(`/Customers/${id}`)
    } catch (error) {
      console.error('Error deleting customer:', error)
      throw error
    }
  },

  // Search customers by name or tax ID
  async search(query: string): Promise<Customer[]> {
    try {
      const customers = await this.getAll()
      const lowerQuery = query.toLowerCase()
      return customers.filter(customer =>
        customer.name.toLowerCase().includes(lowerQuery) ||
        customer.taxId.includes(query) ||
        (customer.email && customer.email.toLowerCase().includes(lowerQuery))
      )
    } catch (error) {
      console.error('Error searching customers:', error)
      throw error
    }
  }
}