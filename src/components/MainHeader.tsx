import { useContext } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { ThemeModeContext } from '../context/ThemeModeContext';
import { ThemeModeType } from '../context/ThemeModeType';

export function MainHeader(): JSX.Element {
  const themeModeContext = useContext(ThemeModeContext);

  const themeModeHandler = () => {
    themeModeContext?.setThemeMode(themeModeContext.themeMode === ThemeModeType.light ? ThemeModeType.dark : ThemeModeType.light);
  }

  return (
    <header className='h-20 ml-6 text-xl text-primaryTextColor font-medium flex items-center'>
      <div className='flex w-full '>
        <span>work in progress... </span>
      </div>
      <div className='flex mr-6' >
        <button onClick={() => themeModeHandler()}>
          {
            themeModeContext?.themeMode == ThemeModeType.dark && <FiSun className={'hover:scale-125 duration-500'} />
          }
          {
            themeModeContext?.themeMode == ThemeModeType.light && <FiMoon className={'hover:scale-125 duration-500'} />
          }
        </button>
      </div>
    </header>
  )
}
