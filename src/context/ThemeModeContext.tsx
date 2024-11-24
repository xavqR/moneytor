import { PropsWithChildren, createContext, useState } from 'react';
import IThemeModeContext from './interfaces/IThemeModeContext';
import { ThemeModeType } from './ThemeModeType';

export const ThemeModeContext = createContext<IThemeModeContext | undefined>(undefined);

type MyProps = {
  children?: React.ReactElement
}

export function ThemeModeProvider(props: PropsWithChildren<MyProps>): JSX.Element {
  const [themeMode, setTheme] = useState<ThemeModeType>(ThemeModeType.light)
  return (
    <ThemeModeContext.Provider value={{
      themeMode,
      setThemeMode: setTheme
    }}>
      {props.children}
    </ThemeModeContext.Provider>
  );
}