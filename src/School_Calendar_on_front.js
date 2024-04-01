import React from 'react';
import "./School_Calendar_Page.css"
import Calendar_on_front from './Calendar_on_front';


const School_Calendar_on_front = () => {

    const activities = [
      { date: new Date(2024, 0, 5), activityName: 'Meeting' },
      { date: new Date(2024, 2, 15), activityName: 'Gym' },
      { date: new Date(2024, 0, 15), activityName: 'Gym' },
      { date: new Date(2024, 11, 20), activityName: 'Gym' },

      // Add more activities as needed
    ];


    const getActivityForDate = (date) => {
      // Replace this logic with your actual data retrieval or mapping logic
      return activities.find(activity => activity.date.getTime() === date.getTime());
    };
  
    return (
      <div className="">
        
        <Calendar_on_front activities={activities} getActivityForDate={getActivityForDate} />
        
      </div>
      
    );
  };
  
  export default School_Calendar_on_front;