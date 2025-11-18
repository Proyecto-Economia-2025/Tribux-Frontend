import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Home, FileText, Plus, Eye, LogOut } from 'lucide-react'

interface SidebarProps {
  activeItem: string
  onItemClick: (item: string) => void
}

export default function Sidebar({ activeItem, onItemClick }: SidebarProps) {
  const navigate = useNavigate()

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/menu' },
    { id: 'invoices', label: 'Lista de Facturas', icon: FileText, path: '/invoices' },
    { id: 'create', label: 'Crear Factura', icon: Plus, path: '/invoices/create' },
    { id: 'view', label: 'Ver Factura', icon: Eye, path: '/invoices/view' },
  ]

  const handleItemClick = (item: typeof menuItems[0]) => {
    onItemClick(item.id)
    navigate(item.path)
  }

  const handleLogout = () => {
    navigate('/auth/login')
  }

  return (
    <div className="w-64 bg-white shadow-lg h-full flex flex-col">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-gray-800">Tribux</h2>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleItemClick(item)}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                  activeItem === item.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t">
        <button
          onClick={handleLogout}
          className="w-full flex items-center px-4 py-3 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Cerrar Sesión
        </button>
      </div>
    </div>
  )
}