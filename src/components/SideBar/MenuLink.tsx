import { Link, useLocation } from 'react-router-dom'
import MenuOptionIcon from './MenuIcon'
import MenuOption from '../../domain/entites/MenuOption'

type Props = {
  menuOption: MenuOption,
  isSideBarOpen: boolean
}

export function MenuLink({ menuOption, isSideBarOpen }: Props): JSX.Element {
  const location = useLocation()

  return (
    <Link to={menuOption.Path}>
      <li className={`flex items-center gap-x-5 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white                            
        ${location.pathname === menuOption.Path ? 'bg-gray-300 dark:bg-gray-700' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
        <span className='text-xl pl-1'><MenuOptionIcon iconType={menuOption.MenuOptionIcon} /></span>
        <span className={`${!isSideBarOpen && 'hidden'} text-sm origin-left hover:block`}>{menuOption.Title}</span>
      </li>
    </Link>
  )
}