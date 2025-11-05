import React from 'react';
import { Home, User } from 'lucide-react';

const tabs = [
  { key: 'home', label: 'Home', icon: Home },
  { key: 'profile', label: 'Profile', icon: User },
];

export default function TabBar({ current, onChange }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur border-t border-gray-200">
      <div className="mx-auto max-w-4xl grid grid-cols-2">
        {tabs.map(({ key, label, icon: Icon }) => {
          const active = current === key;
          return (
            <button
              key={key}
              onClick={() => onChange(key)}
              className={`flex items-center justify-center gap-2 py-3 text-sm font-medium transition-colors ${
                active ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Icon className={`h-5 w-5 ${active ? 'fill-indigo-50' : ''}`} />
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
