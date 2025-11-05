import React, { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function startOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}
function endOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
}
function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

export default function CalendarView({ events = [], onOpenModal }) {
  const [current, setCurrent] = useState(new Date());
  const [selected, setSelected] = useState(new Date());

  const days = useMemo(() => {
    const start = startOfMonth(current);
    const end = endOfMonth(current);

    const startWeekday = (start.getDay() + 6) % 7; // Monday=0
    const totalDays = end.getDate();

    const cells = [];
    // Previous month fillers
    for (let i = 0; i < startWeekday; i++) {
      cells.push({ date: addDays(start, i - startWeekday), currentMonth: false });
    }
    // Current month
    for (let i = 1; i <= totalDays; i++) {
      cells.push({ date: new Date(current.getFullYear(), current.getMonth(), i), currentMonth: true });
    }
    // Next month fillers to complete weeks
    while (cells.length % 7 !== 0) {
      const last = cells[cells.length - 1].date;
      cells.push({ date: addDays(last, 1), currentMonth: false });
    }

    return cells;
  }, [current]);

  const eventsByDay = useMemo(() => {
    const map = new Map();
    for (const e of events) {
      const key = new Date(e.date.getFullYear(), e.date.getMonth(), e.date.getDate()).toDateString();
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(e);
    }
    return map;
  }, [events]);

  // Auto-open modal if today has events
  useEffect(() => {
    const today = new Date();
    const key = new Date(today.getFullYear(), today.getMonth(), today.getDate()).toDateString();
    const todaysEvents = eventsByDay.get(key) || [];
    if (todaysEvents.length > 0) {
      onOpenModal?.(today, todaysEvents);
    }
  }, [eventsByDay, onOpenModal]);

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  function openFor(date) {
    const key = new Date(date.getFullYear(), date.getMonth(), date.getDate()).toDateString();
    const es = eventsByDay.get(key) || [];
    setSelected(date);
    onOpenModal?.(date, es);
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <button onClick={() => setCurrent(new Date(current.getFullYear(), current.getMonth() - 1, 1))} className="p-2 rounded-md hover:bg-gray-100">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={() => setCurrent(new Date(current.getFullYear(), current.getMonth() + 1, 1))} className="p-2 rounded-md hover:bg-gray-100">
            <ChevronRight className="h-5 w-5" />
          </button>
          <h3 className="ml-2 text-sm font-semibold text-gray-900">
            {current.toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}
          </h3>
        </div>
        <button onClick={() => setCurrent(new Date())} className="px-3 py-1.5 text-xs rounded-md border border-gray-200 hover:bg-gray-50">Today</button>
      </div>

      <div className="grid grid-cols-7 gap-px bg-gray-100">
        {weekDays.map((d) => (
          <div key={d} className="bg-white px-3 py-2 text-xs font-medium text-gray-500">
            {d}
          </div>
        ))}
        {days.map(({ date, currentMonth: isCurrentMonth }, idx) => {
          const key = new Date(date.getFullYear(), date.getMonth(), date.getDate()).toDateString();
          const dayEvents = eventsByDay.get(key) || [];
          const isToday = key === new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).toDateString();
          const isSelected = key === new Date(selected.getFullYear(), selected.getMonth(), selected.getDate()).toDateString();

          return (
            <button
              key={idx}
              onClick={() => openFor(date)}
              className={`h-20 w-full bg-white px-2 py-2 text-left relative ${
                !isCurrentMonth ? 'text-gray-400' : 'text-gray-900'
              } ${isSelected ? 'ring-2 ring-indigo-500 z-10' : ''}`}
            >
              <div className={`text-xs ${isToday ? 'font-bold text-indigo-600' : ''}`}>
                {date.getDate()}
              </div>

              <div className="absolute bottom-2 left-2 flex gap-1">
                {dayEvents.slice(0, 3).map((e, i) => (
                  <span key={i} title={e.title} className={`h-2 w-2 rounded-full ${
                    e.type === 'Meeting' ? 'bg-blue-500' : 'bg-emerald-500'
                  }`} />
                ))}
                {dayEvents.length > 3 && (
                  <span className="text-[10px] text-gray-500">+{dayEvents.length - 3}</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
