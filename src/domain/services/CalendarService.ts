import ICalendarService from './interfaces/ICalendarService';

class CalendarService implements ICalendarService {
  public getDayName(date: Date): string {
    return date.toLocaleDateString(navigator.language, { weekday: 'long' }).toUpperCase().substring(0, 3);
  }
}

export default CalendarService