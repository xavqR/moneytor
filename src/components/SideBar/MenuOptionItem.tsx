import { Link, useLocation } from "react-router-dom";
import MenuOption from "../../domain/entites/MenuOption";
import { useState } from "react";
import MenuOptionIcon from "./MenuOptionIcon";
import { MenuOptionType } from "../../domain/enums/MenuOptionType";

type Props = {
  menuOption: MenuOption,
  isSideBarOpen: boolean
}

export function MenuOptionItem({ menuOption, isSideBarOpen }: Props): JSX.Element {
  const location = useLocation()
  const [isOpenCrearOptions, setIsOpenCrearOptions] = useState(false)

  if (menuOption.MenuOptionType === MenuOptionType.Button) {
    return (
      <>
        <div className="relative inline-block text-left ml-0 mb-4">
          <button type="button"
            className={`${isOpenCrearOptions || menuOption.SubMenuOptions.find(smo => smo.Path === location.pathname) ? 'bg-gray-300 shadow-gray-500' :'bg-white shadow-gray-300'} inline-flex justify-center w-full duration-300 px-4 py-2 rounded-2xl border border-gray-300 shadow-sm text-sm text-gray-700 hover:bg-gray-200 hover:shadow-md hover:text-gray-900 hover:shadow-gray-600`}
            onClick={() => setIsOpenCrearOptions(!isOpenCrearOptions)}>
            <span className='text-xl pl-0'> <MenuOptionIcon iconType={menuOption.MenuOptionIcon} /></span>
            <span className={` ${!isSideBarOpen && 'hidden'} text-sm ml-2`}>{menuOption.Title} </span>
          </button>
          <div className={`${!isOpenCrearOptions ? 'h-0 w-0' : 'h-22 w-44 ml-1 mt-1 rounded-md shadow-lg duration-200 ease-linear absolute z-10 bg-white'}`}>
            <div className={`${!isOpenCrearOptions ? 'opacity-0' : 'py-1 delay-150 transition-opacity opacity-100'}`} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {menuOption.SubMenuOptions.map((subMenuOption) => {
                return (               
                    <Link key={subMenuOption.Id} to={subMenuOption.Path} className={`${!isOpenCrearOptions ? 'hidden' : 'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'} `} role="menuitem">{subMenuOption.Title}</Link>               
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
  else {
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
}

export default MenuOptionItem