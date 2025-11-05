import React, { useMemo, useState } from 'react';
import { Calendar } from 'lucide-react';

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}
function endOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}
function sameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

export default function CalendarView({ events = [] }) {
  const [current, setCurrent] = useState(new Date());
  const [selected, setSelected] = useState(new Date());

  const monthMatrix = useMemo(() => {
    const start = startOfMonth(current);
    const end = endOfMonth(current);

    const daysInMonth = end.getDate();
    const startWeekday = (start.getDay() + 6) % 7; // make Monday = 0

    const cells = [];
    for (let i = 0; i < startWeekday; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(current.getFullYear(), current.getMonth(), d));

    while (cells.length % 7 !== 0) cells.push(null);

    const weeks = [];
    for (let i = 0; i < cells.length; i += 7) {
      weeks.push(cells.slice(i, i + 7));
    }
    return weeks;
  }, [current]);

  const eventsByDay = useMemo(() => {
    const map = new Map();
    for (const ev of events) {
      const d = new Date(ev.date);
      const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(ev);
    }
    return map;
  }, [events]);

  const selectedKey = `${selected.getFullYear()}-${selected.getMonth()}-${selected.getDate()}`;
  const selectedEvents = eventsByDay.get(selectedKey) || [];

  const monthName = current.toLocaleString('default', { month: 'long', year: 'numeric' });

  function goto(offset) {
    const d = new Date(current);
    d.setMonth(d.getMonth() + offset);
    setCurrent(d);
    // keep selected within the month if same month, otherwise move selection to 1st of new month
    const s = new Date(d.getFullYear(), d.getMonth(), 1);
    setSelected(s);
  }

  return (
    <section className="mt-6">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="text-indigo-600" size={20} />
          <h2 className="text-lg font-semibold text-gray-900">Calendar</h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => goto(-1)}
            className="rounded-md border border-gray-200 px-2 py-1 text-sm hover:bg-gray-50"
          >
            Prev
          </button>
          <span className="text-sm font-medium text-gray-700">{monthName}</span>
          <button
            onClick={() => goto(1)}
            className="rounded-md border border-gray-200 px-2 py-1 text-sm hover:bg-gray-50"
          >
            Next
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-gray-200 p-3 md:col-span-2">
          <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-gray-500">
            {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d) => (
              <div key={d} className="py-1">{d}</div>
            ))}
          </div>
          <div className="mt-1 grid grid-cols-7 gap-1">
            {monthMatrix.flatMap((week, wi) =>
              week.map((day, di) => {
                const hasEvents = day
                  ? eventsByDay.has(`${day.getFullYear()}-${day.getMonth()}-${day.getDate()}`)
                  : false;
                const isSelected = day ? sameDay(day, selected) : false;
                return (
                  <button
                    key={`${wi}-${di}`}
                    disabled={!day}
                    onClick={() => day && setSelected(day)}
                    className={`aspect-square rounded-md p-1 text-sm transition ${
                      !day
                        ? 'bg-transparent'
                        : isSelected
                        ? 'bg-indigo-600 text-white'
                        : 'hover:bg-gray-50'
                    } ${hasEvents && !isSelected ? 'ring-2 ring-inset ring-indigo-300' : ''}`}
                  >
                    <div className="flex h-full w-full items-start justify-end">
                      <span className="p-1">{day ? day.getDate() : ''}</span>
                    </div>
                    {hasEvents && !isSelected && (
                      <div className="mx-auto mt-[-18px] h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    )}
                  </button>
                );
              })
            )}
          </div>
        </div>
        <div className="rounded-xl border border-gray-200 p-4">
          <h3 className="text-sm font-semibold text-gray-900">Highlights</h3>
          <p className="text-xs text-gray-500">
            {selected.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })}
          </p>
          {selectedEvents.length === 0 ? (
            <p className="mt-4 text-sm text-gray-500">No events or meetings on this day.</p>
          ) : (
            <ul className="mt-3 space-y-3">
              {selectedEvents.map((ev, idx) => (
                <li key={idx} className="rounded-lg border border-gray-200 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{ev.title}</span>
                    <span className="text-xs text-gray-500">{ev.time}</span>
                  </div>
                  {ev.community && (
                    <p className="mt-1 text-xs text-gray-500">{ev.community}</p>
                  )}
                  {ev.description && (
                    <p className="mt-1 text-xs text-gray-600">{ev.description}</p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
