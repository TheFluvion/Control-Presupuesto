import { useState } from "react"
import Mensaje from "./Mensaje"


export default function NuevoPresupuesto({ presupuesto, setPresupuesto, setIsValidPresupuesto }) {
    const [message, setMessage] = useState('')


    function handlePresupuesto(e) {
        e.preventDefault()

        if (!presupuesto || presupuesto < 0) {
            setMessage('NO es un presupuesto valido')
            return
        }
        setMessage('')
        setIsValidPresupuesto(true)
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            <form onSubmit={handlePresupuesto} className="formulario">
                <div className="campo">
                    <label> Definir Presupuesto</label>
                    <input type="number"
                        className="nuevo-presupuesto"
                        placeholder="Añade tu Presupuesto"
                        value={presupuesto}
                        onChange={(e) => setPresupuesto(Number(e.target.value))}
                        min={0}

                    />
                </div>
                <input type="submit" value="Añadir" />
                {message && <Mensaje tipo='error'>{message}</Mensaje>}
            </form>
        </div>
    )
}