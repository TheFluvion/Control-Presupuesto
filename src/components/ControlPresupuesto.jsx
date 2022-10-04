import { useState, useEffect } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

export default function ControlPresupuesto({ presupuesto, setPresupuesto, gastos, setGastos, setIsValidPresupuesto }) {
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    const [porcentaje, setPorcentaje] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
        const totalDisponible = presupuesto - totalGastado
        const nuevoPorcentaje = ((presupuesto - totalDisponible) / presupuesto) * 100

        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje.toFixed(2))
        }, 1500)
        setGastado(totalGastado)
        setDisponible(totalDisponible)
    }, [gastos])

    function formatearCantidad(cantidad) {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    function resetPresupuesto(){
        if(confirm('¿Desea reiniciar la app?')){
            setPresupuesto(0)
            setGastos([])
            setIsValidPresupuesto(false)
        }
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar
                    value={porcentaje}
                    styles={buildStyles({
                        pathColor: porcentaje > 100 ? 'D7082A' : '0041FE',
                        trailColor: '#F5F5F5',
                        textColor: porcentaje > 100 ? 'D7082A' : '0041FE'
                    })}
                    text={`${porcentaje}% Gastado`}
                />
            </div>
            <div className="contenido-presupuesto">
                <button className="reset-app" type="button" onClick={resetPresupuesto}>
                    Reset App
                </button>
                <p>
                    <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
                </p>
                <p className={`${disponible < 0 ? 'negativo' : ''}`}>
                    <span>Disponible: </span> {formatearCantidad(disponible)}
                </p>
                <p>
                    <span>Gastado: </span> {formatearCantidad(gastado)}
                </p>
            </div>
        </div>
    )
}