import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "./calendar.css";
import { BsCameraVideo } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";

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
        <div className="Notification">
          <div className="Title">Upcoming Events</div>
          <button className="btn-view">ViewAll</button>
        </div>
        <div className="list-even">
          <div className="title-bs">Today,4 Apr</div>

          <div className="title-even">
            <div className="even">
              <h3 className="name-even">First session with alex stan</h3>
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

          <div className="title-even-new">
            <div className="even">
              <h3 className="name-even">First session with alex stan</h3>
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

          <div className="title-even-webnar">
            <div className="even">
              <h3 className="name-evens">First session with alex stan</h3>
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
        </div>
      </div>
    </div>
  );
}
