import { CalendarEvent } from "./CalendarEvent";
import { EventReservation } from "./EventReservation";
import { DEFAULT_TIME_FORMAT } from "./defaults";

export const addDays = (date: Date, days: number) => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
};

export const compareEventsByStartTime = (a: CalendarEvent, b: CalendarEvent) => {
  if (a.startTimeUtc < b.startTimeUtc) {
    return -1;
  }
  if (a.startTimeUtc > b.startTimeUtc) {
    return 1;
  }
  return 0;
};

export const minutesSinceMidnight = (dateObj: Date) => {
  if (!dateObj) {
    return 0;
  }
  const date = new Date(dateObj);
  var minutes = date.getMinutes();
  var hours = date.getHours();
  return 60 * hours + minutes;
};

export const getEventTime = (event: CalendarEvent) => {
  const start = new Date(event.startTimeUtc);
  const end = new Date(event.endTimeUtc);
  const isAllDay: Boolean = event.isAllDay;
  if (isAllDay) {
    return 'All Day';
  }
  if (end && end > new Date(0)) {
    return (
      start.toLocaleTimeString([], DEFAULT_TIME_FORMAT) +
      ' ~ ' +
      end.toLocaleTimeString([], DEFAULT_TIME_FORMAT)
    );
  }
  return start.toLocaleTimeString([], DEFAULT_TIME_FORMAT);
};

export const formatReservationTimeFrame = (reservation: EventReservation) => {
  const start = new Date(reservation.startTimeUtc);
  const end = new Date(reservation.endTimeUtc);
  if (end && end > new Date(0)) {
    return (
      start.toLocaleTimeString([], DEFAULT_TIME_FORMAT) +
      ' ~ ' +
      end.toLocaleTimeString([], DEFAULT_TIME_FORMAT)
    );
  }
  return start.toLocaleTimeString([], DEFAULT_TIME_FORMAT);
};

export const getDateInLocalTime = (dateObj: Date) => {
  return new Date(dateObj.toString().split('GMT')[0] + ' UTC')
    .toISOString()
    .split('T')[0];
};
