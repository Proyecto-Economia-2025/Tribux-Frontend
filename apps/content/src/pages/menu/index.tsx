import React, { useState, useEffect } from 'react'
import { FileText, DollarSign, Receipt, Calendar, AlertCircle, Loader2 } from 'lucide-react'
import Sidebar from '../../components/dashboard/Sidebar'
import DashboardHeader from '../../components/dashboard/DashboardHeader'
import DashboardFooter from '../../components/dashboard/DashboardFooter'
import MetricCard from '../../components/dashboard/MetricCard'
import RevenueChart from '../../components/dashboard/RevenueChart'
import { invoicesService, StatsSummary, MonthlyStats } from '../../services'

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState('dashboard')
  const [metrics, setMetrics] = useState<StatsSummary | null>(null)
  const [monthlyData, setMonthlyData] = useState<MonthlyStats[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setLoading(true)
        setError(null)

        // Load metrics and monthly data in parallel
        const [statsSummary, statsByMonth] = await Promise.all([
          invoicesService.getStatsSummary(),
          invoicesService.getStatsByMonth()
        ])

        setMetrics(statsSummary)
        setMonthlyData(statsByMonth)
      } catch (err) {
        console.error('Error loading dashboard data:', err)
        setError('Error al cargar los datos del dashboard')
        // Fallback to mock data
        setMetrics({
          totalInvoices: 156,
          totalInvoiced: 2456789,
          totalIVA: 294814,
          invoicesToday: 8,
        })
        setMonthlyData([
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
        ])
      } finally {
        setLoading(false)
      }
    }

    loadDashboardData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
        <DashboardHeader />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
          <main className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
              <p className="text-gray-600">Cargando dashboard...</p>
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
        <Sidebar
          activeItem={activeItem}
          onItemClick={setActiveItem}
        />
        <main className="flex-1 overflow-auto">
          <div className="p-8 space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
              <h1 className="text-4xl font-bold mb-2">¡Bienvenido a Tribux!</h1>
              <p className="text-blue-100 text-lg">Tu plataforma digital para gestión tributaria eficiente</p>
              <div className="mt-6 flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Sistema operativo</span>
                </div>
                <div className="text-sm text-blue-200">
                  Última actualización: {new Date().toLocaleDateString('es-ES')}
                </div>
              </div>
            </div>

            {/* Métricas */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Métricas Principales</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <MetricCard
                  title="Total de Facturas"
                  value={metrics?.totalInvoices || 0}
                  icon={FileText}
                  color="bg-blue-500"
                />
                <MetricCard
                  title="Monto Total Facturado"
                  value={`₡${(metrics?.totalInvoiced || 0).toLocaleString()}`}
                  icon={DollarSign}
                  color="bg-green-500"
                />
                <MetricCard
                  title="Total IVA Generado"
                  value={`₡${(metrics?.totalIVA || 0).toLocaleString()}`}
                  icon={Receipt}
                  color="bg-purple-500"
                />
                <MetricCard
                  title="Facturas del Día"
                  value={metrics?.invoicesToday || 0}
                  icon={Calendar}
                  color="bg-orange-500"
                />
              </div>
            </div>

            {/* Gráfico */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Facturación por Mes</h2>
              <RevenueChart data={monthlyData} />
            </div>

            {/* Paneles Adicionales */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Actividad Reciente</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Factura #00156 creada</p>
                      <p className="text-xs text-gray-500">Hace 2 horas</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Pago recibido</p>
                      <p className="text-xs text-gray-500">Hace 4 horas</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Factura enviada a Hacienda</p>
                      <p className="text-xs text-gray-500">Hace 6 horas</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Próximos Vencimientos</h3>
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-red-900">Factura #00123</p>
                      <p className="text-xs text-red-600">Vence hoy</p>
                    </div>
                    <span className="text-xs font-semibold text-red-700 bg-red-100 px-2 py-1 rounded-full">
                      Urgente
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-yellow-900">Factura #00145</p>
                      <p className="text-xs text-yellow-600">Vence en 3 días</p>
                    </div>
                    <span className="text-xs font-semibold text-yellow-700 bg-yellow-100 px-2 py-1 rounded-full">
                      Pendiente
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div>
                      <p className="text-sm font-medium text-blue-900">Factura #00167</p>
                      <p className="text-xs text-blue-600">Vence en 1 semana</p>
                    </div>
                    <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded-full">
                      Próximo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <DashboardFooter />
    </div>
  )
}