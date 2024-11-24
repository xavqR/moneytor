import { Route, Routes } from 'react-router-dom'
import Alertas from './pages/Alertas'
import Gastos from './pages/Gastos'
import CrearAlerta from './pages/CrearAlerta'
import CrearGasto from './pages/CrearGasto'
import { MainContent } from './components/MainContent'
import { MainHeader } from './components/MainHeader'
import { SideBar } from './components/SideBar/SideBar'
import Calendar from './pages/Calendar'
import { ThemeModeContext } from './context/ThemeModeContext.jsx'
import { useContext } from 'react'
import { ThemeModeType } from './context/ThemeModeType.js'

function App() {
    const themeModeContext = useContext(ThemeModeContext);

    return (
        <div id='Layout' className={`${themeModeContext?.themeMode === ThemeModeType.dark ? 'theme-dark' : 'theme-light'}  flex h-screen bg-primaryBg`}>
            <SideBar />
            <section id='Content' className='flex flex-col grow'>
                <MainHeader />
                <main className='flex flex-1'>
                    <MainContent>
                        <Routes>
                            <Route path='/' element={<Calendar />} />
                            <Route path='/crearGasto' element={<CrearGasto />} />
                            <Route path='/crearAlerta' element={<CrearAlerta />} />
                            <Route path='/calendar' element={<Calendar />} />
                            <Route path='/gastos' element={<Gastos />} />
                            <Route path='/alertas' element={<Alertas />} />
                        </Routes>
                    </MainContent>
                </main>
                <footer id='Fotter' className='h-4'></footer>
            </section>
        </div>
    )
}

export default App

