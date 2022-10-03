import { useState, useEffect } from 'react'
import CerrarModal from '../img/cerrar.svg'
import Mensaje from './Mensaje'
import { generarFecha, generarId } from '../helpers'

export default function Modal({ setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar }) {
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setFecha(gastoEditar.fecha)
            setId(gastoEditar.id)
        }
    }, [])

    function closeModal() {
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {
            setModal(false)
        }, 500)
    }

    function handleSubmit(e) {
        e.preventDefault()

        if ([nombre, cantidad, categoria].includes('')) {
            setError('Todos los campos son obligatorios')
            return
        }
        if (gastoEditar.id) {
            guardarGasto({ nombre, cantidad, categoria, id, fecha })
        } else {
            const id = generarId()
            const fecha = generarFecha()
            guardarGasto({ nombre, cantidad, categoria, id, fecha })
        }
        setError('')
        closeModal()
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CerrarModal} alt="cerrarModal" onClick={closeModal} />
            </div>

            <form onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
                <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
                <div className='campo'>
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input
                        id='nombre'
                        type="text"
                        placeholder='Añade Nombre Gasto'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id='cantidad'
                        type="number"
                        placeholder='Añade gasto'
                        min='0'
                        value={cantidad}
                        onChange={(e) => setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="categoria">Categoria</label>
                    <select
                        id="categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input type="submit" value={gastoEditar.nombre ? 'Guardar Cambios' : 'Añadir Gasto'} />
            </form>
            {error && <Mensaje tipo='error'>{error}</Mensaje>}
        </div>
    )
}
