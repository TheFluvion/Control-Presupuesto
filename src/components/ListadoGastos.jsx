import Gasto from "./Gasto";


export default function ListadoGastos({ gastos, setGastoEditar, eliminarGasto }) {

    return (
        <>
            <div className="listado-gastos contenedor">
                <h2>{gastos.lenght ? 'Gastos' : 'No hay Gastos'}</h2>

                {gastos.map(gasto => (
                    <Gasto
                    key={gasto.id} 
                    gasto={gasto}
                    setGastoEditar={setGastoEditar}
                    eliminarGasto={eliminarGasto}
                    />
                ))}
            </div>
        </>
    )
}