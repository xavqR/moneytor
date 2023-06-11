import { Menu, Transition } from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom'
import MenuOptionIcon from './MenuIcon'
import MenuOption from '../../domain/entites/MenuOption'

type Props = {
  menuOption: MenuOption,
  isSideBarOpen: boolean
}

export function MenuButton({ menuOption, isSideBarOpen }: Props): JSX.Element {
  const location = useLocation()
  const isLocationSubMenuOption = menuOption.SubMenuOptions.find(smo => smo.Path === location.pathname)

  return (
    <div className="mb-3">
      <Menu>
        {({ open }) => (
          <>
            <Menu.Button className={`${open || isLocationSubMenuOption ? 'bg-gray-300 shadow-gray-500' : 'bg-white shadow-gray-300'} inline-flex justify-center duration-300 px-4 py-2 rounded-2xl border border-gray-300 shadow-sm text-sm text-gray-700 hover:bg-gray-200 hover:shadow-md hover:text-gray-900 hover:shadow-gray-600`}>
              <span className='text-xl pl-0'> <MenuOptionIcon iconType={menuOption.MenuOptionIcon} /></span>
              <span className={` ${!isSideBarOpen && 'hidden'} text-sm ml-2`}>{menuOption.Title} </span>
            </Menu.Button>
            <Transition
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-0"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-0">
              <Menu.Items className={'w-44 mt-1 rounded-md shadow-lg absolute z-10 bg-white'}>
                {menuOption.SubMenuOptions.map((subMenuOption) => {
                  return (
                    <Menu.Item key={subMenuOption.Id}  >
                      {({ active }) => (
                        <Link to={subMenuOption.Path} className={`${active ? 'block px-4 py-2 text-sm text-gray-700 bg-gray-100 hover:text-gray-900' : 'block px-4 py-2 text-sm text-gray-700  hover:text-gray-900'} `} >{subMenuOption.Title}</Link>
                      )}
                    </Menu.Item>
                  );
                })}
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  )
}