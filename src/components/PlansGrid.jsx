import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$9/mo',
    features: ['Join communities', 'View events & meetings', 'Email support'],
    highlight: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$19/mo',
    features: ['All Basic features', 'Priority RSVPs', 'Custom reminders'],
    highlight: true,
  },
  {
    id: 'team',
    name: 'Team',
    price: '$49/mo',
    features: ['Up to 10 members', 'Shared calendar', 'Advanced analytics'],
    highlight: false,
  },
];

export default function PlansGrid() {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Subscription Plans</h2>
        <p className="text-sm text-gray-500">Choose a plan that fits your community involvement.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-xl border p-5 shadow-sm transition hover:shadow-md ${
              plan.highlight ? 'border-indigo-500 ring-1 ring-indigo-200 bg-indigo-50/40' : 'border-gray-200'
            }`}
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-base font-semibold text-gray-900">{plan.name}</h3>
              <span className="text-sm font-medium text-indigo-600">{plan.price}</span>
            </div>
            <ul className="mt-3 space-y-2">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                  <Check size={16} className="text-green-600 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <button className={`mt-4 w-full rounded-lg px-3 py-2 text-sm font-medium transition ${
              plan.highlight
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-gray-900 text-white hover:bg-black'
            }`}>
              Choose {plan.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
