import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Alertas from './pages/Alertas'
import Gastos from './pages/Gastos'
import CrearAlerta from './pages/CrearAlerta'
import CrearGasto from './pages/CrearGasto'
import { MainContent } from './components/MainContent'
import { MainHeader } from './components/MainHeader'
import { SideBar } from './components/SideBar/SideBar'

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
                <footer id='Fotter' className='h-4'></footer>
            </section>
        </div>
    )
}

export default App

