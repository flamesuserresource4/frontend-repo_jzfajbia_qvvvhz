import React from 'react';
import PlansGrid from './PlansGrid';
import CalendarView from './CalendarView';

export default function HomeView({ events }) {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-violet-500 p-6 text-white shadow">
        <h1 className="text-xl font-semibold">Welcome to Community Hub</h1>
        <p className="mt-1 text-sm opacity-90">
          Explore events, meetings, and plans curated by your communities.
        </p>
      </div>
      <PlansGrid />
      <CalendarView events={events} />
    </div>
  );
}
