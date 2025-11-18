import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Home, FileText, Plus, Eye, LogOut, ChevronRight } from 'lucide-react'

interface SidebarProps {
  activeItem: string
  onItemClick: (item: string) => void
}

export default function Sidebar({ activeItem, onItemClick }: SidebarProps) {
  const navigate = useNavigate()
  const [isHovered, setIsHovered] = useState(false)

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/menu', color: 'text-blue-600' },
    { id: 'invoices', label: 'Lista de Facturas', icon: FileText, path: '/invoices', color: 'text-green-600' },
    { id: 'create', label: 'Crear Factura', icon: Plus, path: '/invoices/create', color: 'text-purple-600' },
    { id: 'view', label: 'Ver Factura', icon: Eye, path: '/invoices/view', color: 'text-orange-600' },
  ]

  const handleItemClick = (item: typeof menuItems[0]) => {
    onItemClick(item.id)
    navigate(item.path)
  }

  const handleLogout = () => {
    navigate('/auth/login')
  }

  return (
    <div
      className={`relative h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 shadow-2xl transition-all duration-500 ease-in-out ${
        isHovered ? 'w-72' : 'w-20'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Header */}
      <div className="relative p-6 border-b border-slate-700/50">
        <div className={`flex items-center space-x-3 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Tribux</h2>
            <p className="text-xs text-slate-400">Dashboard</p>
          </div>
        </div>
        {!isHovered && (
          <div className="flex justify-center">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">T</span>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="relative flex-1 p-4">
        <ul className="space-y-3">
          {menuItems.map((item, index) => (
            <li key={item.id}>
              <button
                onClick={() => handleItemClick(item)}
                className={`group relative w-full flex items-center p-3 rounded-xl transition-all duration-300 ease-in-out ${
                  activeItem === item.id
                    ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 shadow-lg shadow-blue-500/10'
                    : 'hover:bg-slate-700/50 border border-transparent hover:border-slate-600/50'
                }`}
              >
                {/* Active Indicator */}
                {activeItem === item.id && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-500 rounded-r-full"></div>
                )}

                {/* Icon */}
                <div className={`flex-shrink-0 transition-all duration-300 ${
                  activeItem === item.id ? item.color : 'text-slate-400 group-hover:text-white'
                }`}>
                  <item.icon className="w-6 h-6" />
                </div>

                {/* Label */}
                <div className={`ml-4 overflow-hidden transition-all duration-300 ease-in-out ${
                  isHovered ? 'w-auto opacity-100' : 'w-0 opacity-0'
                }`}>
                  <span className="text-white font-medium whitespace-nowrap">
                    {item.label}
                  </span>
                </div>

                {/* Hover Arrow */}
                {isHovered && activeItem !== item.id && (
                  <ChevronRight className="w-4 h-4 text-slate-500 ml-auto transition-transform duration-200 group-hover:translate-x-1" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-6 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-1000"></div>
      </nav>

      {/* Footer */}
      <div className="relative p-4 border-t border-slate-700/50">
        <button
          onClick={handleLogout}
          className={`group relative w-full flex items-center p-3 rounded-xl transition-all duration-300 ease-in-out hover:bg-red-500/10 border border-transparent hover:border-red-500/30 ${
            isHovered ? '' : 'justify-center'
          }`}
        >
          <LogOut className="w-6 h-6 text-slate-400 group-hover:text-red-400 transition-colors duration-200" />
          <div className={`ml-4 overflow-hidden transition-all duration-300 ease-in-out ${
            isHovered ? 'w-auto opacity-100' : 'w-0 opacity-0'
          }`}>
            <span className="text-slate-300 group-hover:text-red-300 font-medium whitespace-nowrap">
              Cerrar Sesión
            </span>
          </div>
        </button>

        {/* Version Info */}
        <div className={`mt-4 text-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-xs text-slate-500">v1.0.0</p>
        </div>
      </div>

      {/* Expand Indicator */}
      {!isHovered && (
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-12 bg-gradient-to-r from-slate-800 to-slate-700 rounded-r-lg border-r border-slate-600 flex items-center justify-center shadow-lg">
            <ChevronRight className="w-3 h-3 text-slate-400 animate-pulse" />
          </div>
        </div>
      )}
    </div>
  )
}