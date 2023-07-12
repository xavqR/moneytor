import { useMonthCalendar } from '../hooks/useMonthCalendar';
import { useTitleLocation } from '../hooks/useTitleLocation'
import DayCalendar from '../domain/entites/DayCalendar';
import Expense from '../domain/entites/Expense';
import DayCalendarItem from '../components/DayCalendarItem';


export default function Calendar(): JSX.Element {
    useTitleLocation('Moneytor - calendar')
    const monthCalendarDays: Array<DayCalendar> = useMonthCalendar()

    monthCalendarDays[0]?.Expenses?.push(new Expense('Gasto 1', 1000.00))
    monthCalendarDays[0]?.Expenses?.push(new Expense('Gasto 2', 2000.00))

    return (
        <>
            <ul className="grid grid-cols-7 gap-3 pb-1">
                {
                    monthCalendarDays.slice(0, 7).map((dayCalendar) => {
                        return (
                            <li key={dayCalendar.Id} className='text-center list-none select-none font-semibold text-xs text-gray-500' >{dayCalendar.DateName}</li>
                        )
                    })
                }
            </ul>
            <ul className="grid h-full pb-6 grid-cols-7 gap-3">
                {
                    monthCalendarDays.map((dayCalendar) => {
                        return (
                            <DayCalendarItem key={dayCalendar.Id} dayCalendar={dayCalendar} />
                        )
                    })
                }
            </ul >
        </>
    )
}

