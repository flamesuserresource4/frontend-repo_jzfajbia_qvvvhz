import React from 'react';
import { Check, Crown, Sparkles } from 'lucide-react';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$0',
    tagline: 'Get started',
    features: ['Join public communities', 'View events calendar', 'Email updates'],
    highlight: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$12/mo',
    tagline: 'Best for active members',
    features: ['Priority RSVPs', 'Members-only events', 'Download resources'],
    highlight: true,
  },
  {
    id: 'teams',
    name: 'Teams',
    price: '$29/mo',
    tagline: 'For small groups',
    features: ['Team workspace', 'Admin tools', 'Bulk billing'],
    highlight: false,
  },
];

export default function PlansGrid({ subscribedPlan, onSubscribe }) {
  return (
    <div className="space-y-4">
      {subscribedPlan ? (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Crown className="h-5 w-5 text-emerald-600" />
            <div>
              <p className="text-sm font-semibold text-emerald-900">You’re subscribed</p>
              <p className="text-sm text-emerald-800">Current plan: {subscribedPlan.toUpperCase()}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm rounded-md border border-emerald-300 text-emerald-900 hover:bg-emerald-100">Manage</button>
            <button className="px-3 py-1.5 text-sm rounded-md text-white bg-emerald-600 hover:bg-emerald-700">Go to perks</button>
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-indigo-600" />
          <p className="text-sm text-indigo-900">Unlock members-only events and RSVP priority with Pro.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan) => {
          const isCurrent = subscribedPlan === plan.id;
          return (
            <div key={plan.id} className={`rounded-xl border p-5 bg-white ${
              plan.highlight ? 'border-indigo-300 shadow-sm' : 'border-gray-200'
            }`}>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    {plan.name}
                    {plan.highlight && (
                      <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                        <Crown className="h-3 w-3" /> Popular
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-gray-600">{plan.tagline}</p>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-900">{plan.price}</div>
                </div>
              </div>

              <ul className="mt-4 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check className="h-4 w-4 text-emerald-600" /> {f}
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                {isCurrent ? (
                  <button disabled className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-gray-100 text-gray-500 cursor-not-allowed">
                    Current plan
                  </button>
                ) : (
                  <button onClick={() => onSubscribe(plan.id)} className={`w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    plan.highlight ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'border border-gray-200 hover:bg-gray-50'
                  }`}>
                    {subscribedPlan ? 'Switch to ' : 'Choose '} {plan.name}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
