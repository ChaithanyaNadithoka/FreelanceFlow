import React, { useState } from 'react';
import { Sidebar } from './components/Layout/Sidebar';
import { Header } from './components/Layout/Header';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Invoices } from './pages/Invoices';
import { TaxCalculator } from './pages/TaxCalculator';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import { Income, Invoice } from './types';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [incomes, setIncomes] = useState<Income[]>([
    { id: '1', client: 'Tech Corp', amount: 2500, date: '2024-03-15', status: 'paid' },
    { id: '2', client: 'Design Studio', amount: 1800, date: '2024-03-10', status: 'pending' }
  ]);

  const [invoices, setInvoices] = useState<Invoice[]>([
    { id: '1', client: 'Tech Corp', amount: 2500, date: '2024-03-15', status: 'paid', invoiceNumber: 'INV-2024-001' },
    { id: '2', client: 'Design Studio', amount: 1800, date: '2024-03-10', status: 'pending', invoiceNumber: 'INV-2024-002' }
  ]);

  const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
  const estimatedTax = totalIncome * 0.25;

  const monthlyData = [
    { name: 'Jan', amount: 4200 },
    { name: 'Feb', amount: 3800 },
    { name: 'Mar', amount: 4300 },
    { name: 'Apr', amount: 3900 },
    { name: 'May', amount:  4100 },
    { name: 'Jun', amount: 4800 },
  ];

  const clientData = [
    { name: 'Tech Corp', value: 2500 },
    { name: 'Design Studio', value: 1800 },
    { name: 'Marketing Agency', value: 1500 },
    { name: 'Startup Inc', value: 1200 },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const downloadInvoice = (invoiceNumber: string) => {
    console.log(`Downloading invoice ${invoiceNumber}`);
  };

  if (!isLoggedIn) {
    return (
      <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <Dashboard
            incomes={incomes}
            totalIncome={totalIncome}
            estimatedTax={estimatedTax}
          />
        );

      case 'invoices':
        return (
          <Invoices
            invoices={invoices}
            downloadInvoice={downloadInvoice}
          />
        );

      case 'tax':
        return (
          <TaxCalculator
            totalIncome={totalIncome}
            estimatedTax={estimatedTax}
          />
        );

      case 'reports':
        return (
          <Reports
            monthlyData={monthlyData}
            clientData={clientData}
            totalIncome={totalIncome}
          />
        );

      case 'settings':
        return <Settings />;

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 overflow-auto">
        <Header title={activeTab} />
        <main className="p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;