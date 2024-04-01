import React from 'react';
import "./School_Calendar_Page.css"
import Calendar from './Calendar'; 
import NavBar_Student from './NavBar_Student';
import School_Calendar_on_front from './School_Calendar_on_front';
import NavBar_out from './NavBar_out';


const School_Calendar_Page = () => {

  const activities = [
    { date: new Date(2024, 0, 5), activityName: 'Meeting' },
    { date: new Date(2024, 2, 15), activityName: 'Gym' },
    // Add more activities as needed
  ];

  const getActivityForDate = (date) => {
    // Replace this logic with your actual data retrieval or mapping logic
    return activities.find(activity => activity.date.getTime() === date.getTime());
  };

  return (
    <div>
        <NavBar_out />
        <div className='Calender_for_media'>
            <h1>School Calendar</h1>
            <School_Calendar_on_front />
            </div>
        <div className="Calendar_header">
        <h1>School Calendar</h1>
        <Calendar activities={activities} getActivityForDate={getActivityForDate} />
        </div>
            
        
    </div>
  );
};

export default School_Calendar_Page;

