import React, { useMemo, useState } from 'react';
import TabBar from './components/TabBar';
import HomeView from './components/HomeView';
import ProfileView from './components/ProfileView';

function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

export default function App() {
  const [tab, setTab] = useState('home');
  const [subscribedPlan, setSubscribedPlan] = useState(null);

  const events = useMemo(() => {
    const base = new Date();
    return [
      { title: 'Community Kickoff', type: 'Event', date: addDays(base, 0), time: '6:00 PM', description: 'Welcome session for new members.' },
      { title: 'Design Standup', type: 'Meeting', date: addDays(base, 1), time: '9:30 AM' },
      { title: 'Yoga Class', type: 'Event', date: addDays(base, 3), time: '7:00 AM' },
      { title: 'Mentor 1:1', type: 'Meeting', date: addDays(base, 7), time: '2:00 PM' },
    ];
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <header className="sticky top-0 z-20 bg-white/70 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Community Hub</h1>
            <p className="text-xs text-gray-600">Events • Meetings • Plans</p>
          </div>
          {subscribedPlan && (
            <span className="px-2.5 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">{subscribedPlan.toUpperCase()} member</span>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-6">
        {tab === 'home' && (
          <HomeView
            events={events}
            subscribedPlan={subscribedPlan}
            onSubscribe={(plan) => setSubscribedPlan(plan)}
          />
        )}
        {tab === 'profile' && (
          <ProfileView subscribedPlan={subscribedPlan} />
        )}
      </main>

      <TabBar current={tab} onChange={setTab} />
    </div>
  );
}
