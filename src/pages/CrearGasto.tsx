import { useTitleLocation } from '../hooks/useTitleLocation'

export default function CrearGasto(): JSX.Element {
    useTitleLocation('Moneytor - crear gasto')

    return (
        <>
            <div className=' dark:text-white'>Crear gasto</div>

            <form>
                <label>
                    Desctipción:
                    <input type='text' name='name' />
                </label>
                <input type='submit' value='Submit' />
            </form>
        </>
    )
}


