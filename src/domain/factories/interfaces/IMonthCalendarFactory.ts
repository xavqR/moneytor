import DayCalendar from '../../entites/DayCalendar'

interface IMonthCalendarFactory {
  Create(currenDate: Date): Array<DayCalendar>
}

export default IMonthCalendarFactory