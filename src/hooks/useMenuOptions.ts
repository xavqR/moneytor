import { useState, useEffect } from 'react'
import MenuOption from '../domain/entites/MenuOption'
import MenuOptionsService from '../domain/services/MenuOptionsService'

export function useMenuOptions(): Array<MenuOption> {
  const [menuOptions, setMenuOptions] = useState<Array<MenuOption>>(new Array<MenuOption>())

  useEffect(() => {
    const menuOptionsService = new MenuOptionsService()
    setMenuOptions(menuOptionsService.GetMenuOptions())
  }, [])

  return menuOptions
}
