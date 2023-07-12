import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { useMenuOptions } from '../../hooks/useMenuOptions'
import { useMatchMedia } from '../../hooks/useMatchMedia'
import { MoneytorLogo } from '../Logo/MoneytorLogo'
import { MenuOptionItem } from './MenuOptionItem'
import MenuOption from '../../domain/entites/MenuOption'

export function SideBar(): JSX.Element {
  const [open, setOpen] = useState<boolean>(true)
  const menuOptions: Array<MenuOption> = useMenuOptions()
  const isOpenOrSM: boolean = useMatchMedia('(min-width:640px)', true) && open

  return (
    <>
      <aside id='options' className={`${isOpenOrSM ? 'w-16 sm:w-44' : 'w-16'} relative h-screen text-base text-primaryTextColor duration-300`}>
        <Link to='/calendar'>
          <header className={`flex ${isOpenOrSM && 'px-2'} h-12 mt-3`}>
            <MoneytorLogo showLetters={isOpenOrSM} fontColor='var(--primaryLogoTextColor)' />
          </header>
        </Link>
        <BsArrowLeftCircle onClick={() => setOpen(!open)} className={`${open ? '' : '-rotate-180'} invisible sm:visible absolute text-2xl top-16 -right-2 rounded-full cursor-pointer text-primaryFormColor bg-primaryButtonBg hover:bg-primaryButtonHoverBg opacity-80 duration-300`} />
        <ul className='mt-9 ml-2'>
          {menuOptions && menuOptions.map((menu) => {
            return (
              <MenuOptionItem key={menu.Id} menuOption={menu} isSideBarOpen={isOpenOrSM}></MenuOptionItem>
            );
          })}
        </ul>
      </aside>
    </>
  )
}
