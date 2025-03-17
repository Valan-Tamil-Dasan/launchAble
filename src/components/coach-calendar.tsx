"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export default function CoachCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className=" h-100 ml-10 mr-auto top-20 border rounded-lg p-4 shadow-md bg-white">
      <Calendar mode="single" selected={date} onSelect={setDate} />
    </div>
  );
}
