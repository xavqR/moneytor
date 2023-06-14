import { Menu, Transition } from '@headlessui/react'
import { Link, useLocation } from 'react-router-dom'
import MenuOption from '../../domain/entites/MenuOption'
import { MenuIcon } from './MenuIcon'

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
            <Menu.Button className={`${open || isLocationSubMenuOption ? 'bg-primaryOptionSelected shadow-primaryButtonShadowSelected' : 'bg-primaryButtonBg shadow-primaryButtonShadow'} inline-flex items-center h-11 px-4 rounded-2xl border shadow-md  border-gray-300 hover:bg-primaryButtonHoverBg hover:shadow-md hover:shadow-primaryButtonShadowHover duration-300 `}>
              <span className='text-xl'> <MenuIcon iconType={menuOption.MenuOptionIcon} /></span>
              <span className={` ${!isSideBarOpen && 'hidden'} ml-2`}>{menuOption.Title} </span>
            </Menu.Button>
            <Transition
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-0"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-0">
              <Menu.Items className={'w-44 mt-1 rounded-md shadow-lg absolute z-10 bg-primaryButtonBg'}>
                {menuOption.SubMenuOptions.map((subMenuOption) => {
                  return (
                    <Menu.Item key={subMenuOption.Id}  >
                      {({ active }) => (
                        <Link to={subMenuOption.Path} className={`${active && 'block px-4 py-2 bg-primaryButtonHoverBg'} block px-4 py-2 `} >{subMenuOption.Title}</Link>
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