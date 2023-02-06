import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "./calendar.css";

export default function SmallCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div class="App">
      <div class="leftbar">
        <Calendar
          onChange={setDate}
          value={date}
          showFixedNumberOfWeeks={false}
          calendarType="US"
          formatMonthYear={(locale, date) =>
            date.toLocaleString(locale, { month: "short", year: "numeric" })
          }
        />
      </div>
      <div className="Notification"></div>
    </div>
  );
}
