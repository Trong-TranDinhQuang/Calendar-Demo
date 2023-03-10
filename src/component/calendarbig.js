import React, { useState } from "react";
import { momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "../events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendarbig.css";

import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function BigCalendar() {
  const [eventsData, setEventsData] = useState(events);

  const handleEventClick = (eventClickInfo) => {
    window.location.href =
      "https://www.eventbrite.com/e/hanoi-burns-supper-2023-tickets-467288070197?aff=ebdssbcitybrowse";
  };

  const handleSelect = ({ start, end }) => {
    console.log(start);
    console.log(end);
    const title = window.prompt("New Event name");
    if (title)
      setEventsData([
        ...eventsData,
        {
          start,
          end,
          title,
        },
      ]);
  };
  return (
    <div className="container">
      <Fullcalendar
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        events={eventsData}
        onSelectEvent={(event) => alert(event.title)}
        eventClick={handleEventClick}
        onSelectSlot={handleSelect}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        displayEventEnd="true"
        eventColor={"#" + Math.floor(Math.random() * 16777215).toString(16)}
      />
    </div>
  );
}
