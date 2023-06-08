import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeftCircle } from 'react-icons/bs';
import MLogo from '../../assets/mLogo.svg';
import MoneytorLogo from '../../assets/moneytorLogo.svg';
import useMatchMedia from '../../hooks/UseMatchMedia';
import MenuOptionItem from './MenuOptionItem';
import MenuOptionsService from '../../domain/services/MenuOptionsService';

function SideBar(): JSX.Element {
  const [open, setOpen] = useState(true)
  const isOpenOrSM = useMatchMedia('(min-width:640px)', true) && open;
  var menuOptionsService = new MenuOptionsService();
  var menuOptions = menuOptionsService.GetMenuOptions();

  return (
    <>
      <div className={`${open ? 'w-16 sm:w-40' : 'w-16'} relative h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-1 dark:bg-slate-800`}>
        <BsArrowLeftCircle onClick={() => setOpen(!open)} className={`${open ? '' : '-rotate-180'} invisible sm:visible absolute duration-300 text-2xl bg-white fill-slate-800 rounded-full cursor-pointer top-9 -right-3 dark:fill-gray-400 dark:bg-gray-800`} />
        <Link to='/'>
          <header className={`flex ${open && 'gap-x-4'} items-center justify-center h-12`}>
            {isOpenOrSM ? <img src={MoneytorLogo} alt='' className='w-24 ' /> : <img src={MLogo} alt='' className='w-14' />}
          </header>
        </Link>
        <ul className='pt-6'>
          {menuOptions.map((menu) => {
            return (
              <MenuOptionItem key={menu.Id} menuOption={menu} isSideBarOpen={isOpenOrSM}></MenuOptionItem>
            );
          })}
        </ul>
      </div>
    </>
  )
}

export default SideBar