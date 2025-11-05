import React, { useMemo, useState } from 'react';
import TabBar from './components/TabBar';
import HomeView from './components/HomeView';
import CommunitiesView from './components/CommunitiesView';
import PaymentsView from './components/PaymentsView';
import ProfileView from './components/ProfileView';

export default function App() {
  const [tab, setTab] = useState('home');

  // Mocked events & meetings provided by admin
  const events = useMemo(
    () => [
      { title: 'Yoga Class', date: new Date().toISOString(), time: '07:00 AM', community: 'Yoga Enthusiasts', description: 'Morning Vinyasa Flow' },
      { title: 'Tech Talk: AI Trends', date: addDays(new Date(), 2).toISOString(), time: '06:00 PM', community: 'Tech Talks' },
      { title: 'Community Planning', date: addDays(new Date(), 5).toISOString(), time: '04:00 PM', community: 'Neighborhood Council' },
      { title: 'Book Club: Dune', date: addDays(new Date(), 5).toISOString(), time: '08:00 PM', community: 'Book Club' },
      { title: 'Weekend Yoga', date: addDays(new Date(), 6).toISOString(), time: '09:00 AM', community: 'Yoga Enthusiasts' },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-indigo-50">
      <header className="sticky top-0 z-10 bg-white/70 backdrop-blur border-b border-gray-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold tracking-tight text-gray-900">Community Hub</span>
            <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-xs font-medium text-indigo-700">SaaS</span>
          </div>
          <div className="text-xs text-gray-500">Manage communities with ease</div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pb-24 pt-6">
        {tab === 'home' && <HomeView events={events} />}
        {tab === 'communities' && <CommunitiesView />}
        {tab === 'payments' && <PaymentsView />}
        {tab === 'profile' && <ProfileView />}
      </main>

      <TabBar currentTab={tab} onChange={setTab} />
    </div>
  );
}

function addDays(date, days = 0) {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}
