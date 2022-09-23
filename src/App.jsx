import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './components/Modal'

export default function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)

  function handleNuevoGaston() {
    setModal(true)
  }

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      ></Header>

      {isValidPresupuesto &&
        <div className='nuevo-gasto'>
          <img
            src={IconoNuevoGasto}
            alt="nuevoGasto"
            onClick={handleNuevoGaston}
          />
        </div>
      }

      {modal &&
        <Modal
          setModal={setModal}
        />
      }
    </div>
  )
}
