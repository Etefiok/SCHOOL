import React from 'react';
import "./School_Calendar_Page.css"

const Calendar = ({ activities }) => {
  const months = Array.from({ length: 12 }, (_, i) => new Date(new Date().getFullYear(), i, 1));

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

  return (
    <div className="calendar_Page">
      <div className="monthsgrid">
        {months.map((month, index) => (
          <div key={index} className="months">
            <h3>{month.toLocaleString('default', { month: 'long' })}</h3>
            <div className="weekdaysPP">
              <div>Sun</div>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
            </div>
            <div className="Days">
              {[...Array(month.getDay()).keys()].map((d) => (
                <div key={-d} className="Empty_Empty"></div>
              ))}
              {[...Array(new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate()).keys()].map((day) => (
                <div key={day + 1} className="Day">
                  {day + 1}
                  {getActivityForDate(new Date(month.getFullYear(), month.getMonth(), day + 1)) && (
                    <div className="activity">{getActivityForDate(new Date(month.getFullYear(), month.getMonth(), day + 1))}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
