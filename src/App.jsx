import { useState, useEffect } from 'react'
import Header from './components/Header'
import Filtros from './components/Filtros'
import Modal from './components/Modal'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import ListadoGastos from './components/ListadoGastos'

export default function App() {
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : [])
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) || 0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastoEditar, setGastoEditar] = useState({})
  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([])

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)
      setTimeout(() => {
        setAnimarModal(true)
      }, 500)
    }
  }, [gastoEditar])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) || [])
  }, [gastos])

  useEffect(() => {
    if (presupuesto > 0) {
      setIsValidPresupuesto(true)
    }
  }, [])

  useEffect(() => {
    if (filtro) {
      const gastoFiltrado = gastos.filter(gasto => gasto.categoria === filtro)
      setGastosFiltrados(gastoFiltrado)
    }
  }, [filtro])

  function handleNuevoGasto() {
    setModal(true)
    setGastoEditar({})
    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }

  function guardarGasto(gasto) {
    setGastos([...gastos, gasto])
  }

  function actualizarGastos(gasto) {
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
        setGastos={setGastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      ></Header>

      {isValidPresupuesto &&
        <>
          <main>
            <Filtros
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
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
          actualizarGastos={actualizarGastos}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      }
    </div>
  )
}
