'use client'

import { useState } from 'react'
import Calendar from './calendar/calendar'
import { CalendarEvent, Mode } from './calendar/calendar-types'

export  function CoachSchedule() {

  const mock = [
    {
      "id": "event-1",
      "title": "Bigger",
      "color": "pink",
      "start": "2025-03-01T19:45:00+05:30",
      "end": "2025-03-01T21:45:00+05:30",
      "type": "Meet"
    },
    {
      "id": "event-2",
      "title": "Design Workshop",
      "color": "emerald",
      "start": "2025-03-02T13:45:00+05:30",
      "end": "2025-03-02T14:15:00+05:30",
      "type": "Online Assessment"
    },
    {
      "id": "event-3",
      "title": "Tech Talk",
      "color": "red",
      "start": "2025-03-02T20:30:00+05:30",
      "end": "2025-03-02T22:30:00+05:30",
      "type": "Meet"
    },
    {
      "id": "event-4",
      "title": "Stakeholder Update",
      "color": "indigo",
      "start": "2025-03-04T18:30:00+05:30",
      "end": "2025-03-04T20:30:00+05:30",
      "type": "Other"
    },
    {
      "id": "event-5",
      "title": "Sprint Planning",
      "color": "blue",
      "start": "2025-03-05T21:00:00+05:30",
      "end": "2025-03-05T22:30:00+05:30",
      "type": "Online Assessment"
    },
    {
      "id": "event-6",
      "title": "Product Demo",
      "color": "indigo",
      "start": "2025-03-06T17:45:00+05:30",
      "end": "2025-03-06T18:45:00+05:30",
      "type": "Meet"
    },
    {
      "id": "event-7",
      "title": "Team Standup",
      "color": "emerald",
      "start": "2025-03-07T08:30:00+05:30",
      "end": "2025-03-07T09:00:00+05:30",
      "type": "Other"
    },
    {
      "id": "event-8",
      "title": "Project Review",
      "color": "blue",
      "start": "2025-03-08T13:45:00+05:30",
      "end": "2025-03-08T14:45:00+05:30",
      "type": "Online Assessment"
    },
    {
      "id": "event-9",
      "title": "Feature Planning",
      "color": "red",
      "start": "2025-03-09T09:15:00+05:30",
      "end": "2025-03-09T11:15:00+05:30",
      "type": "Meet"
    },
    {
      "id": "event-10",
      "title": "Code Review",
      "color": "indigo",
      "start": "2025-03-10T12:45:00+05:30",
      "end": "2025-03-10T14:45:00+05:30",
      "type": "Other"
    }
  ];
  const [events, setEvents] = useState<CalendarEvent[]>(mock)
  const [mode, setMode] = useState<Mode>('month')
  const [date, setDate] = useState<Date>(new Date())
  return (
    <Calendar
      events={events}
      setEvents={setEvents}
      mode={mode}
      setMode={setMode}
      date={date}
      setDate={setDate}
    />
  )
}
