import NuevoPresupuesto from "./NuevoPresupuesto"

export default function Header({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto }) {

    return (
        <header>
            <h1>Planificador de Gastos</h1>
            {isValidPresupuesto
                ? <div>control presupuesto</div>
                : <NuevoPresupuesto
                    presupuesto={presupuesto}
                    setPresupuesto={setPresupuesto}
                    setIsValidPresupuesto={setIsValidPresupuesto}
                ></NuevoPresupuesto>
            }
        </header>
    )
}