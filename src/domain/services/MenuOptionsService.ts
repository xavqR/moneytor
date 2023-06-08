import IMenuOptionsService from "./interfaces/IMenuOptionsService";
import MenuOption from "../entites/MenuOption";
import { MenuOptionIconType } from "../enums/MenuOptionIconType";
import { MenuOptionType } from "../enums/MenuOptionType";
import SubMenuOption from "../entites/SubMenuOption";

class MenuOptionsService implements IMenuOptionsService {
  /*Initializer*/
  public GetMenuOptions(): Array<MenuOption> {
    var menuOptions = new Array<MenuOption>();

    var subMmenuOptions = new Array<SubMenuOption>();
    subMmenuOptions.push(new SubMenuOption(1, 'Gasto', '/crearGasto'));
    subMmenuOptions.push(new SubMenuOption(2, 'Alerta', '/crearAlerta'));
    menuOptions.push(new MenuOption(1, 'Crear', '/crear', MenuOptionIconType.New, MenuOptionType.Button, subMmenuOptions));

    menuOptions.push(new MenuOption(2, 'Gastos', '/gastos', MenuOptionIconType.Expenses, MenuOptionType.Link));
    menuOptions.push(new MenuOption(3, 'Alertas', '/alertas', MenuOptionIconType.Alerts, MenuOptionType.Link));

    return menuOptions;
  }
}

export default MenuOptionsService