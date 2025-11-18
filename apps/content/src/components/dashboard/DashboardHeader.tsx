import React from 'react'
import { Menu, X } from 'lucide-react'

interface DashboardHeaderProps {
  onToggleSidebar: () => void
  isSidebarCollapsed: boolean
}

export default function DashboardHeader({ onToggleSidebar, isSidebarCollapsed }: DashboardHeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          >
            {isSidebarCollapsed ? <Menu className="w-5 h-5" /> : <X className="w-5 h-5" />}
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Tribux Dashboard</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">A</span>
            </div>
            <span className="text-sm text-gray-700">Admin</span>
          </div>
        </div>
      </div>
    </header>
  )
}