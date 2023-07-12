import { Link, useLocation } from 'react-router-dom'
import MenuOption from '../../domain/entites/MenuOption'
import { MenuIcon } from './MenuIcon'

type Props = {
  menuOption: MenuOption,
  isSideBarOpen: boolean
}

export function MenuLink({ menuOption, isSideBarOpen }: Props): JSX.Element {
  const location = useLocation()
  return (
    <Link to={menuOption.Path}>
      <li className={`${location.pathname === menuOption.Path ? 'bg-primaryOptionSelected' : 'hover:bg-primaryOptionHover'} flex items-center gap-x-5 p-3 h-12 rounded-lg cursor-pointer`}>
        <span className='text-xl pl-1.5'><MenuIcon iconType={menuOption.MenuOptionIcon} /></span>
        <span className={`${!isSideBarOpen && 'text-transparent'} origin-left hover:block duration-500`}>{isSideBarOpen && menuOption.Title}</span>
      </li>
    </Link>
  )
}