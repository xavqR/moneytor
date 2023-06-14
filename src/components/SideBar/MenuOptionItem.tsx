import MenuOption from '../../domain/entites/MenuOption'
import { MenuOptionType } from '../../domain/enums/MenuOptionType'
import { MenuButton } from './MenuButton'
import { MenuLink } from './MenuLink'

type Props = {
  menuOption: MenuOption,
  isSideBarOpen: boolean
}

export function MenuOptionItem({ menuOption, isSideBarOpen }: Props): JSX.Element {
  if (menuOption.MenuOptionType === MenuOptionType.Button) {
    return (
      <MenuButton menuOption={menuOption} isSideBarOpen={isSideBarOpen} />
    )
  }
  else {
    return (
      <MenuLink menuOption={menuOption} isSideBarOpen={isSideBarOpen} />
    )
  }
}

