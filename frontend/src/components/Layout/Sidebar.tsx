import React from 'react';
import { 
  Home,
  Wallet,
  FileText,
  Calculator,
  BarChart3,
  Settings,
  User
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-indigo-600">FreelanceFlow</h1>
      </div>
      <nav className="mt-6">
        {[
          { icon: Home, label: 'Dashboard', value: 'dashboard' },
          { icon: Wallet, label: 'Income', value: 'income' },
          { icon: FileText, label: 'Invoices', value: 'invoices' },
          { icon: Calculator, label: 'Tax Calculator', value: 'tax' },
          { icon: BarChart3, label: 'Reports', value: 'reports' },
          { icon: Settings, label: 'Settings', value: 'settings' },
        ].map(({ icon: Icon, label, value }) => (
          <button
            key={value}
            onClick={() => setActiveTab(value)}
            className={`w-full flex items-center px-6 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 ${
              activeTab === value ? 'bg-indigo-50 text-indigo-600' : ''
            }`}
          >
            <Icon className="w-5 h-5 mr-3" />
            {label}
          </button>
        ))}
      </nav>
      <div className="absolute bottom-0 w-64 p-6">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gray-500" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}