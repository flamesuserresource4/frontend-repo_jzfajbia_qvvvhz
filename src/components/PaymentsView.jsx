import React from 'react';

export default function PaymentsView() {
  const invoices = [
    { id: 'INV-1021', date: '2025-02-02', amount: '$19.00', status: 'Paid' },
    { id: 'INV-1018', date: '2025-01-02', amount: '$19.00', status: 'Paid' },
    { id: 'INV-1015', date: '2024-12-02', amount: '$19.00', status: 'Paid' },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Payments</h2>
      <div className="rounded-xl border border-gray-200">
        <div className="grid grid-cols-4 gap-2 border-b border-gray-200 px-4 py-2 text-xs font-semibold text-gray-500">
          <div>Invoice</div>
          <div>Date</div>
          <div>Amount</div>
          <div>Status</div>
        </div>
        {invoices.map((i) => (
          <div key={i.id} className="grid grid-cols-4 gap-2 px-4 py-3 text-sm">
            <div className="font-medium text-gray-900">{i.id}</div>
            <div className="text-gray-600">{i.date}</div>
            <div className="text-gray-900">{i.amount}</div>
            <div className="text-green-600">{i.status}</div>
          </div>
        ))}
      </div>
      <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">Manage Billing</button>
    </div>
  );
}
