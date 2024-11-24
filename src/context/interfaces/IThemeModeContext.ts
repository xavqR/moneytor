import { ThemeModeType } from "../ThemeModeType"

interface IThemeModeContext {
  themeMode: ThemeModeType
  setThemeMode: (themeMode: ThemeModeType) => void;
}

export default IThemeModeContext