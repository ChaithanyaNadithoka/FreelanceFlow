import React from 'react';

interface TaxCalculatorProps {
  totalIncome: number;
  estimatedTax: number;
}

export function TaxCalculator({ totalIncome, estimatedTax }: TaxCalculatorProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Tax Calculator</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Total Income</label>
            <p className="text-2xl font-bold text-gray-900">${totalIncome.toLocaleString()}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Tax (25%)</label>
            <p className="text-2xl font-bold text-gray-900">${estimatedTax.toLocaleString()}</p>
          </div>
        </div>
        <div className="mt-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Tax Breakdown</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Federal Tax (15%)</span>
              <span className="font-medium">${(totalIncome * 0.15).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">State Tax (5%)</span>
              <span className="font-medium">${(totalIncome * 0.05).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Self-Employment Tax (5%)</span>
              <span className="font-medium">${(totalIncome * 0.05).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Quarterly Tax Estimates</h3>
        <div className="space-y-4">
          {['Q1', 'Q2', 'Q3', 'Q4'].map((quarter) => (
            <div key={quarter} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{quarter} 2024</h4>
                <p className="text-sm text-gray-600">Due: {quarter === 'Q1' ? 'April 15' : quarter === 'Q2' ? 'June 15' : quarter === 'Q3' ? 'September 15' : 'January 15'}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">${(estimatedTax / 4).toLocaleString()}</p>
                <button className="text-sm text-indigo-600 hover:text-indigo-700">Schedule Payment</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}