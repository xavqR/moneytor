import { useEffect, useState } from 'react'
import MonthCalendarFactory from '../domain/factories/MonthCalendarFactory'
import IMonthCalendarFactory from '../domain/factories/interfaces/IMonthCalendarFactory'
import DayCalendar from '../domain/entites/DayCalendar'
import Expense from '../domain/entites/Expense';
import { expenses } from '../mocks/expenses.json';

export function useMonthCalendar(): Array<DayCalendar> {
  const [monthCalendar, setMonthCalendar] = useState<Array<DayCalendar>>(new Array<DayCalendar>())

  useEffect(() => {
    const monthCalendarFactory: IMonthCalendarFactory = new MonthCalendarFactory()
    const monthCalendarDays: Array<DayCalendar> = monthCalendarFactory.Create(new Date())
    monthCalendarDays.forEach(calendarDay => {
      calendarDay.Date.setHours(0, 0, 0, 0)
      expenses.filter((e) => GetExpenseDate(e.date).getTime() == calendarDay.Date.getTime()).forEach(dayExpenses => {
        calendarDay.Expenses.push(new Expense(dayExpenses.id, dayExpenses.category, dayExpenses.category, dayExpenses.amount, new Date(dayExpenses.date)))
      })
    });
    setMonthCalendar(monthCalendarDays)
  }, [])

  return monthCalendar
}

function GetExpenseDate(date: string): Date {
  const expenseDate: Date = new Date(date);
  expenseDate.setHours(0, 0, 0, 0)
  return expenseDate
}

