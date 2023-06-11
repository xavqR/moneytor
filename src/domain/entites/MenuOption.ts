import { MenuOptionType } from '../enums/MenuOptionType'
import { MenuOptionIconType } from './../enums/MenuOptionIconType'
import SubMenuOption from './SubMenuOption'

class MenuOption {
  public Id: number
  public Title: string
  public Path: string
  public MenuOptionIcon: MenuOptionIconType
  public MenuOptionType: MenuOptionType
  public SubMenuOptions: Array<SubMenuOption>

  constructor(id: number, title: string, path: string, menuOptionIcon: MenuOptionIconType, menuOptionType: MenuOptionType, subMenuOptions: Array<SubMenuOption> = new Array<SubMenuOption>()) {
    this.Id = id
    this.Title = title
    this.Path = path
    this.MenuOptionIcon = menuOptionIcon
    this.MenuOptionType = menuOptionType
    this.SubMenuOptions = subMenuOptions
  }
}

export default MenuOption