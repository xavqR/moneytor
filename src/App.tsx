import SideBar from './components/SideBar/SideBar'
import MainHeader from './components/MainHeader'
import MainContent from './components/MainContent'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Alertas from './pages/Alertas'
import Gastos from './pages/Gastos'
import CrearAlerta from './pages/CrearAlerta'
import CrearGasto from './pages/CrearGasto'

function App() {
    return (
        <div id='Layout' className='theme-light flex h-screen bg-primaryBg'>
            <SideBar />
            <section id='Content' className='flex flex-col grow'>
                <MainHeader />
                <main className='flex flex-1'>
                    <MainContent>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/crearGasto' element={<CrearGasto />} />
                            <Route path='/crearAlerta' element={<CrearAlerta />} />
                            <Route path='/gastos' element={<Gastos />} />
                            <Route path='/alertas' element={<Alertas />} />
                        </Routes>
                    </MainContent>
                </main>
            </section>
        </div>
    )
}

export default App

