import api from './axios'

export interface Customer {
  id: string
  name: string
  email: string
  taxId: string
}

export const customersService = {
  async getAll(): Promise<Customer[]> {
    const response = await api.get('/customers')
    return response.data
  },

  async getById(id: string): Promise<Customer> {
    const response = await api.get(`/customers/${id}`)
    return response.data
  },

  async create(customer: Omit<Customer, 'id'>): Promise<Customer> {
    const response = await api.post('/customers', customer)
    return response.data
  },

  async update(id: string, customer: Partial<Customer>): Promise<Customer> {
    const response = await api.put(`/customers/${id}`, customer)
    return response.data
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/customers/${id}`)
  },
}