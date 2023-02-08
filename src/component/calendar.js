import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import events from "../events";
import "./calendar.css";
import { BsCameraVideo } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";

export default function SmallCalendar(props) {
  const [date, setDate] = useState(new Date());
  const [showEvents, setShowEvents] = useState(false);
  const [eventsData, setEventsData] = useState(events);

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

  const onChange = (selectedDate) => {
    setDate(selectedDate);
  };
  const handleEventClick = () => {
    setShowEvents(!showEvents);
  };

  // const handleDateSelect = (date) => {
  //   setSelectedDate(date);
  //   setShowEvents(true);
  // };

  return (
    <div class="App">
      <div class="leftbar">
        <Calendar
          events={eventsData}
          onSelectEvent={(event) => alert(event.title)}
          onSelectSlot={handleSelect}
          onChange={onChange}
          onClick={() => setShowEvents(!showEvents)}
          value={date}
          showFixedNumberOfWeeks={false}
          calendarType="US"
          formatMonthYear={(locale, date) =>
            date.toLocaleString(locale, { month: "short", year: "numeric" })
          }
        />
        <div className="Notification">
          <div className="Title">Upcoming Events</div>
          <button className="btn-view" onClick={handleEventClick}>
            ViewAll
          </button>
        </div>
        <div className="list-even">
          <div className="title-bs">Today,4 Apr</div>
          {showEvents && (
            <div className="title-even">
              <div className="even">
                <h3 className="name-even">{date.toDateString()}</h3>
                <span className="icon-video">
                  <BsCameraVideo size="1.5rem" />
                </span>
              </div>
              <div className="time-line">9:00 AM - 9:30 AM GTM +8</div>
              <div className="user">
                <span className="icon-user">
                  <BiUserCircle size="2rem" />
                </span>
                <a href="https://xuanthulab.net">View client profile</a>
              </div>
            </div>
          )}
          {showEvents && (
            <div className="title-even-new">
              <div className="even">
                <h3 className="name-even">{date.toDateString()}</h3>
                <span className="icon-video">
                  <BsCameraVideo size="1.5rem" />
                </span>
              </div>
              <div className="time-line">9:00 AM - 9:30 AM GTM +8</div>
              <div className="user">
                <span className="icon-user">
                  <BiUserCircle size="2rem" />
                </span>
                <a href="https://xuanthulab.net">View client profile</a>
              </div>
            </div>
          )}
          {showEvents && (
            <div className="title-even-webnar">
              <div className="even">
                <h3 className="name-evens">{date.toDateString()}</h3>
                <span className="icon-video">
                  <BsCameraVideo size="1.5rem" />
                </span>
              </div>
              <div className="time-line">9:00 AM - 9:30 AM GTM +8</div>
              <div className="user">
                <span className="icon-user">
                  <BiUserCircle size="2rem" />
                </span>
                <a href="https://xuanthulab.net">View client profile</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
