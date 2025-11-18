import React, { useState } from 'react'
import { FileText, DollarSign, Receipt, Calendar } from 'lucide-react'
import Sidebar from '../../components/dashboard/Sidebar'
import MetricCard from '../../components/dashboard/MetricCard'
import RevenueChart from '../../components/dashboard/RevenueChart'

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState('dashboard')

  // Datos mockeados para demo
  const metrics = {
    totalInvoices: 156,
    totalInvoiced: 2456789,
    totalIVA: 294814,
    invoicesToday: 8,
  }

  const monthlyData = [
    { month: 'Ene', amount: 180000 },
    { month: 'Feb', amount: 220000 },
    { month: 'Mar', amount: 195000 },
    { month: 'Abr', amount: 250000 },
    { month: 'May', amount: 280000 },
    { month: 'Jun', amount: 320000 },
    { month: 'Jul', amount: 290000 },
    { month: 'Ago', amount: 310000 },
    { month: 'Sep', amount: 275000 },
    { month: 'Oct', amount: 330000 },
    { month: 'Nov', amount: 350000 },
    { month: 'Dic', amount: 380000 },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-2">Resumen de tu actividad tributaria</p>
          </div>

          {/* Métricas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="Total de Facturas"
              value={metrics.totalInvoices}
              icon={FileText}
              color="bg-blue-500"
            />
            <MetricCard
              title="Monto Total Facturado"
              value={`₡${metrics.totalInvoiced.toLocaleString()}`}
              icon={DollarSign}
              color="bg-green-500"
            />
            <MetricCard
              title="Total IVA Generado"
              value={`₡${metrics.totalIVA.toLocaleString()}`}
              icon={Receipt}
              color="bg-purple-500"
            />
            <MetricCard
              title="Facturas del Día"
              value={metrics.invoicesToday}
              icon={Calendar}
              color="bg-orange-500"
            />
          </div>

          {/* Gráfico */}
          <div className="mb-8">
            <RevenueChart data={monthlyData} />
          </div>

          {/* Espacio para contenido adicional */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Actividad Reciente</h3>
              <p className="text-gray-600">Próximamente: Lista de facturas recientes</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Próximos Vencimientos</h3>
              <p className="text-gray-600">Próximamente: Recordatorios de vencimientos</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}