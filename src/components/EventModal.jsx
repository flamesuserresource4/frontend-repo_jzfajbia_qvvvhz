import React from 'react';
import { Calendar, Clock, X } from 'lucide-react';

export default function EventModal({ open, onClose, date, events = [] }) {
  if (!open) return null;

  const dateStr = date?.toLocaleDateString(undefined, {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md rounded-xl bg-white shadow-xl ring-1 ring-black/5">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-indigo-600" />
            <h3 className="text-base font-semibold text-gray-900">Events on {dateStr}</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded-md hover:bg-gray-100">
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        <div className="p-5 space-y-3">
          {events.length === 0 && (
            <p className="text-sm text-gray-600">No events for this day.</p>
          )}
          {events.map((evt, idx) => (
            <div key={idx} className="rounded-lg border border-gray-200 p-3">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-gray-900">{evt.title}</p>
                  <p className="text-sm text-gray-600">{evt.type}</p>
                </div>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  evt.type === 'Meeting' ? 'bg-blue-50 text-blue-700' : 'bg-emerald-50 text-emerald-700'
                }`}>
                  {evt.type}
                </span>
              </div>
              {evt.time && (
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-700">
                  <Clock className="h-4 w-4" />
                  <span>{evt.time}</span>
                </div>
              )}
              {evt.description && (
                <p className="mt-2 text-sm text-gray-700">{evt.description}</p>
              )}
              <div className="mt-3 flex items-center gap-2">
                <button className="inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Add to Calendar</button>
                <button className="inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded-md border border-gray-200 hover:bg-gray-50">Remind me</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
