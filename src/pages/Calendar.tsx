import { useMonthCalendar } from '../hooks/useMonthCalendar';
import { useTitleLocation } from '../hooks/useTitleLocation'
import DayCalendar from '../domain/entites/DayCalendar';
import DayCalendarItem from '../components/DayCalendarItem';

export default function Calendar(): JSX.Element {
    useTitleLocation('Moneytor - calendar')
    const monthCalendarDays: Array<DayCalendar> = useMonthCalendar()

    return (
        <>
            <ul className='grid grid-cols-7 gap-3 pb-1'>
                {
                    monthCalendarDays.slice(0, 7).map((dayCalendar) => {
                        return (
                            <li key={dayCalendar.Id} className='text-center list-none select-none font-semibold text-xs text-gray-500' >{dayCalendar.DateName}</li>
                        )
                    })
                }
            </ul>
            <ul className='grid h-full pb-6 grid-cols-7 gap-3'>
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

