import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import ListadoGastos from './components/ListadoGastos'

export default function App() {
  const [gastos, setGastos] = useState([])
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)
      setTimeout(() => {
        setAnimarModal(true)
      }, 500)
    }
  }, [gastoEditar])

  function handleNuevoGasto() {
    setModal(true)
    setGastoEditar({})
    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }

  function guardarGasto(gasto) {
    setGastos([...gastos, gasto])
    const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
    setGastos(gastosActualizados)
  }

  function eliminarGasto(id) {
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id)
    setGastos(gastosActualizados)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      ></Header>

      {isValidPresupuesto &&
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          </main>
          <div className='nuevo-gasto'>
            <img
              src={IconoNuevoGasto}
              alt="nuevoGasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      }

      {modal &&
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      }
    </div>
  )
}
