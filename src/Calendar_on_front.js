import React, { useState } from 'react';
import "./School_Calendar.css";

const Calendar_on_front = ({ activities }) => {
  const months = Array.from({ length: 12 }, (_, i) => new Date(new Date().getFullYear(), i, 1));

  const [date, setDate] = useState(new Date());

  const getActivityForDate = (date) => {
    // Replace this logic with your actual data retrieval or mapping logic
    const activity = activities.find(activity => {
      return (
        activity.date.getDate() === date.getDate() &&
        activity.date.getMonth() === date.getMonth() &&
        activity.date.getFullYear() === date.getFullYear()
      );
    });
    return activity ? activity.activityName : null;
  };

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const startDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const handlePrevYear = () => {
    setDate(new Date(date.getFullYear() - 1, date.getMonth(), 1));
  };

  const handleNextYear = () => {
    setDate(new Date(date.getFullYear() + 1, date.getMonth(), 1));
  };


  const renderCalendar = () => {
    const days = [];
    const today = new Date();
    for (let i = 1; i <= daysInMonth(date); i++) {

    const currentDate = new Date(date.getFullYear(), date.getMonth(), i);
    // const isToday = currentDate.toDateString() === today.toDateString();

    const isToday =
    currentDate.getDate() === today.getDate() &&
    currentDate.getMonth() === today.getMonth() &&
    currentDate.getFullYear() === today.getFullYear();

    const className = isToday ? 'day today' : 'day';
    // const activityDetails = getActivityForDate(currentDate);


      days.push(
        <div key={i} className={className}>
          
          {i} 
          
          {getActivityForDate(new Date(date.getFullYear(), date.getMonth(), i)) && (
            // <button className='active'> 
            <div className="activity_front">{getActivityForDate(new Date(date.getFullYear(), date.getMonth(), i))}</div>
            //  </button>
           
          )}


          

        </div>
      );
    }
    return days;
  };

  return (
    <div className="calendar">
      <div className="header">
      <button onClick={handlePrevYear}>&lt;&lt;</button>
        <button onClick={handlePrevMonth}>&lt;</button>
        <h6>{date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}</h6>
        <button onClick={handleNextMonth}>&gt;</button>
        <button onClick={handleNextYear}>&gt;&gt;</button>
      </div>
      <div className="weekdays">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>
      <div className="days-of-week">
        {[...Array(startDay).keys()].map((d) => (
          <div key={-d} className="empty"></div>
        ))}
        {renderCalendar()}


       

      </div>
    </div>
  );
};

export default Calendar_on_front;
