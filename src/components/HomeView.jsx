import React, { useRef, useState } from 'react';
import PlansGrid from './PlansGrid';
import CalendarView from './CalendarView';
import EventModal from './EventModal';
import Hero3D from './Hero3D';

export default function HomeView({ events, subscribedPlan, onSubscribe }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDate, setModalDate] = useState(null);
  const [modalEvents, setModalEvents] = useState([]);

  const plansRef = useRef(null);
  const calendarRef = useRef(null);

  function handleOpenModal(date, es) {
    setModalDate(date);
    setModalEvents(es);
    setModalOpen(true);
  }

  function scrollTo(el) {
    el?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="space-y-8">
      <Hero3D onPrimary={() => scrollTo(plansRef)} onSecondary={() => scrollTo(calendarRef)} />

      <section ref={plansRef}>
        <h2 className="text-sm font-semibold text-gray-900 mb-3">Your plan</h2>
        <PlansGrid subscribedPlan={subscribedPlan} onSubscribe={onSubscribe} />
      </section>

      <section ref={calendarRef}>
        <h2 className="text-sm font-semibold text-gray-900 mb-3">Calendar</h2>
        <CalendarView events={events} onOpenModal={handleOpenModal} />
      </section>

      <EventModal open={modalOpen} onClose={() => setModalOpen(false)} date={modalDate} events={modalEvents} />
    </div>
  );
}
