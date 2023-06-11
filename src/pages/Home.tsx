import { useTitleLocation } from '../hooks/useTitleLocation'

const Home = () => {
     useTitleLocation('Moneytor')
     return <div className='dark:text-white'>Home</div>
}

export default Home
