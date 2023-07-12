import DayCalendar from '../entites/DayCalendar'
import CalendarService from '../services/CalendarService'
import ICalendarService from '../services/interfaces/ICalendarService'

import IMonthCalendarFactory from './interfaces/IMonthCalendarFactory'

export default class MonthCalendarFactory implements IMonthCalendarFactory {

  private calendarService: ICalendarService

  constructor() {
    this.calendarService = new CalendarService()
  }

  public Create(currenDate: Date): Array<DayCalendar> {
    const calendarMonth = new Array<DayCalendar>()
    const currentMonthDays = new Date(currenDate.getFullYear(), currenDate.getMonth() + 1, 0).getDate()
    const previousMonthLastDay = this.getLastDayOfPreviousMonth(currenDate)
    const previousMonthCalendarDays = previousMonthLastDay.getDay() > 0 ? previousMonthLastDay.getDay() : 6
    const totalMonthCalendarDays = Math.ceil((previousMonthCalendarDays + currentMonthDays) / 7) * 7
    const nextMonthCalendarDays = totalMonthCalendarDays - currentMonthDays - previousMonthCalendarDays

    const currentDate = { Date: previousMonthLastDay }
    currentDate.Date.setDate(currentDate.Date.getDate() - (previousMonthCalendarDays - 1))

    this.AddPreviousMonthDaysToCalendar(currentDate, previousMonthCalendarDays, calendarMonth);
    this.AddMonthDaysToCalendar(currentDate, currentMonthDays, calendarMonth);
    this.AddNextMonthDaysToCalendar(currentDate, nextMonthCalendarDays, calendarMonth);

    return calendarMonth;
  }

  private AddPreviousMonthDaysToCalendar(currentDate: { Date: Date }, previousMonthDays: number, calendarMonthDays: Array<DayCalendar>): void {
    while (previousMonthDays > 0) {
      calendarMonthDays.push(new DayCalendar(calendarMonthDays.length + 1, new Date(currentDate.Date), this.calendarService.getDayName(currentDate.Date)));
      currentDate.Date.setDate(currentDate.Date.getDate() + 1)
      previousMonthDays--;
    }
  }

  private AddMonthDaysToCalendar(currentDate: { Date: Date }, totalMonthDays: number, calendarMonthDays: Array<DayCalendar>): void {
    while (totalMonthDays > 0) {
      calendarMonthDays.push(new DayCalendar(calendarMonthDays.length + 1, new Date(currentDate.Date), this.calendarService.getDayName(currentDate.Date)));
      currentDate.Date.setDate(currentDate.Date.getDate() + 1)
      totalMonthDays--;
    }
  }

  private AddNextMonthDaysToCalendar(currentDate: { Date: Date }, nextMonthCalendarDays: number, calendarMonthDays: Array<DayCalendar>): void {
    while (nextMonthCalendarDays > 0) {
      calendarMonthDays.push(new DayCalendar(calendarMonthDays.length + 1, new Date(currentDate.Date), this.calendarService.getDayName(currentDate.Date)));
      currentDate.Date.setDate(currentDate.Date.getDate() + 1)
      nextMonthCalendarDays--;
    }
  }

  private getLastDayOfPreviousMonth(currenDate: Date): Date {
    const previousMonthDate = new Date(currenDate)
    previousMonthDate.setDate(1);
    previousMonthDate.setHours(-1);

    return previousMonthDate;
  }
}
