import React from 'react';
import { PlusCircle } from 'lucide-react';
import { Income } from '../types';

interface DashboardProps {
  incomes: Income[];
  totalIncome: number;
  estimatedTax: number;
}

export function Dashboard({ incomes, totalIncome, estimatedTax }: DashboardProps) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500 text-sm font-medium">Total Income</h3>
          <p className="text-3xl font-bold text-gray-900">${totalIncome.toLocaleString()}</p>
          <p className="text-green-600 text-sm mt-2">+12% from last month</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500 text-sm font-medium">Estimated Tax</h3>
          <p className="text-3xl font-bold text-gray-900">${estimatedTax.toLocaleString()}</p>
          <p className="text-gray-600 text-sm mt-2">25% of total income</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500 text-sm font-medium">Pending Invoices</h3>
          <p className="text-3xl font-bold text-gray-900">
            ${incomes.filter(i => i.status === 'pending').reduce((sum, i) => sum + i.amount, 0).toLocaleString()}
          </p>
          <p className="text-orange-600 text-sm mt-2">2 invoices pending</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">Recent Income</h3>
            <button className="flex items-center text-indigo-600 hover:text-indigo-700">
              <PlusCircle className="w-5 h-5 mr-1" />
              Add New
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {incomes.map((income) => (
                <tr key={income.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{income.client}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${income.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(income.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      income.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {income.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}