import { Link } from 'react-router-dom'
import DayCalendar from '../domain/entites/DayCalendar'
import { useCalendarDayScrolling } from '../hooks/useCalendarDayScrolling'
import { useId } from 'react'

type Props = {
  dayCalendar: DayCalendar,
}

export default function DayCalendarItem({ dayCalendar }: Props): JSX.Element {
  const relativeDivId = useId()
  const absoluteDivId = useId()
  const isScrolling = useCalendarDayScrolling(relativeDivId, absoluteDivId)

  return (
    <Link id={relativeDivId} to="/crearGasto" className='relative min-h-[22px] overflow-hidden border list-none font-semibold text-center text-xs cursor-pointer select-none text-gray-500 bg-gray-50 bg-opacity-50 active:bg-primaryOptionSelected hover:shadow-md hover:shadow-gray-300 duration-300'>
      <div id={absoluteDivId} className='absolute pt-1 w-full'>
        <div className='mb-1'>{dayCalendar.Date.getDate()}</div>
        <ul>
          {
            !isScrolling && dayCalendar.Expenses.map((expense, index) => {
              return (
                <li key={index}>
                  <div className='flex pl-2 pr-2 bg-red-300 m-0.5'>
                    <div className='flex grow'>{expense.Description}</div>
                    <div className='flex'>{expense.Amount}</div>
                  </div>
                </li>
              )
            })
          }
        </ul >
      </div>
    </Link >
  )
}