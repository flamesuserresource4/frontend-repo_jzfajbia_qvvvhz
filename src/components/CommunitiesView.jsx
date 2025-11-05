import React from 'react';

export default function CommunitiesView() {
  const communities = [
    { name: 'Yoga Enthusiasts', members: 128, about: 'Daily mindfulness and yoga sessions.' },
    { name: 'Tech Talks', members: 342, about: 'Weekly talks on software and startups.' },
    { name: 'Book Club', members: 89, about: 'Monthly book discussions and reviews.' },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Your Communities</h2>
      <ul className="space-y-3">
        {communities.map((c) => (
          <li key={c.name} className="rounded-xl border border-gray-200 p-4">
            <div className="flex items-center justify-between">
              <p className="font-medium text-gray-900">{c.name}</p>
              <span className="text-xs text-gray-500">{c.members} members</span>
            </div>
            <p className="mt-1 text-sm text-gray-600">{c.about}</p>
            <div className="mt-3 flex gap-2">
              <button className="rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-black">View</button>
              <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium hover:bg-gray-50">Leave</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
