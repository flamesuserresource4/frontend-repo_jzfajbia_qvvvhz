import React from 'react';

export default function ProfileView() {
  const user = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    plan: 'Pro',
    joined: 'Aug 12, 2024',
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Profile</h2>
      <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500" />
        <div>
          <p className="font-medium text-gray-900">{user.name}</p>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="text-sm text-gray-500">Plan</p>
          <p className="text-gray-900">{user.plan}</p>
        </div>
        <div className="rounded-xl border border-gray-200 p-4">
          <p className="text-sm text-gray-500">Member Since</p>
          <p className="text-gray-900">{user.joined}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium hover:bg-gray-50">Edit Profile</button>
        <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-black">Sign Out</button>
      </div>
    </div>
  );
}
