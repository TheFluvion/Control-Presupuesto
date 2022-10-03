import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

export default function Header({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos }) {

    return (
        <header>
            <h1>Planificador de Gastos</h1>
            {isValidPresupuesto
                ? <ControlPresupuesto
                    gastos={gastos}
                    presupuesto={presupuesto}
                ></ControlPresupuesto>
                : <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                ></NuevoPresupuesto>
            }
        </header>
    )
}