import React from 'react';
import { Home, Users, CreditCard, User } from 'lucide-react';

const tabs = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'communities', label: 'Communities', icon: Users },
  { key: 'payments', label: 'Payments', icon: CreditCard },
  { key: 'profile', label: 'Profile', icon: User },
];

export default function TabBar({ currentTab, onChange }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur border-t border-gray-200">
      <div className="mx-auto max-w-5xl px-4">
        <ul className="grid grid-cols-4">
          {tabs.map(({ key, label, icon: Icon }) => (
            <li key={key}>
              <button
                onClick={() => onChange(key)}
                className={`w-full flex flex-col items-center gap-1 py-3 transition-colors ${
                  currentTab === key ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label={label}
              >
                <Icon size={22} />
                <span className="text-xs font-medium">{label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
