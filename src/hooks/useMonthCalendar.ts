import { useEffect, useState } from 'react'
import MonthCalendarFactory from '../domain/factories/MonthCalendarFactory'
import IMonthCalendarFactory from '../domain/factories/interfaces/IMonthCalendarFactory'
import DayCalendar from '../domain/entites/DayCalendar'

export function useMonthCalendar(): Array<DayCalendar> {
  const [monthCalendar, setMonthCalendar] = useState<Array<DayCalendar>>(new Array<DayCalendar>())

  useEffect(() => {
    const monthCalendarFactory: IMonthCalendarFactory = new MonthCalendarFactory()
    setMonthCalendar(monthCalendarFactory.Create(new Date()))
  }, [])

  return monthCalendar
}
