import React from 'react';

export default function ProfileView({ subscribedPlan }) {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <div className="flex items-center gap-4">
          <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop" alt="Avatar" className="h-16 w-16 rounded-full object-cover" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Alex Johnson</h2>
            <p className="text-sm text-gray-600">alex.johnson@example.com</p>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="text-xs text-gray-500">Current plan</p>
            <p className="mt-1 font-medium text-gray-900">{subscribedPlan ? subscribedPlan.toUpperCase() : 'None'}</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="text-xs text-gray-500">Communities</p>
            <p className="mt-1 font-medium text-gray-900">4</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <p className="text-xs text-gray-500">Upcoming events</p>
            <p className="mt-1 font-medium text-gray-900">3</p>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h3 className="text-base font-semibold text-gray-900">Security</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="px-3 py-1.5 text-sm rounded-md border border-gray-200 hover:bg-gray-50">Change password</button>
          <button className="px-3 py-1.5 text-sm rounded-md border border-gray-200 hover:bg-gray-50">Two-factor auth</button>
          <button className="px-3 py-1.5 text-sm rounded-md text-white bg-gray-900 hover:bg-black">Sign out</button>
        </div>
      </div>
    </div>
  );
}
