"use client";
import React from "react";
import WeeklyDayPicker from "react-weekly-day-picker";
import { useState } from "react";

const DayPicker = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    // 'day' is a Date object representing the selected day
    setSelectedDay(day);
    const dayName = getDayName(day.getDay());
    console.log(`Selected day: ${dayName}`);
  };

  const getDayName = (dayNumber) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[dayNumber];
  };
  return (
    <div>
      <WeeklyDayPicker
        selectDay={function (day) {}}
        onClick={handleDayClick}
        selected={selectedDay}
      />
    </div>
  );
};

export default DayPicker;
