import MenuOption from "../../entites/MenuOption";

interface IMenuOptionsService
{
  GetMenuOptions(): Array<MenuOption>;
}

export default IMenuOptionsService