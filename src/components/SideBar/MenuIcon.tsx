import { MenuOptionIconType } from "../../domain/enums/MenuOptionIconType"
import { SlBell, SlWallet } from "react-icons/sl";
import { BiAddToQueue } from "react-icons/bi";

type Props = {
  iconType: MenuOptionIconType;
}

export default function MenuIcon({ iconType }: Props): JSX.Element {

  return (
    <>
      {GetIcon()}
    </>
  )

  function GetIcon(): undefined | JSX.Element {
    const IconTypeMap = new Map<MenuOptionIconType, JSX.Element>([
      [MenuOptionIconType.Expenses, <SlWallet />],
      [MenuOptionIconType.Alerts, <SlBell />],
      [MenuOptionIconType.New, <BiAddToQueue />]
    ]);

    let currentOption = [...IconTypeMap].filter(([k]) => k === iconType).pop();

    if (currentOption != undefined) {
      return currentOption[1];
    }
    else {
      throw new Error("Icon map not defined");
    }
  }
}

