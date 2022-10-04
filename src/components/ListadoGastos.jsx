import Gasto from "./Gasto";


export default function ListadoGastos({ gastos, setGastoEditar, eliminarGasto, filtro, gastosFiltrados }) {

    return (
        <>
            <div className="listado-gastos contenedor">

                {
                    filtro
                        ? <>
                            <h2>{gastosFiltrados.lenght > 0 ? 'Gastos' : 'No hay Gastos en esta categoria'}</h2>
                            {gastosFiltrados.map(gasto => (
                                <Gasto
                                    key={gasto.id}
                                    gasto={gasto}
                                    setGastoEditar={setGastoEditar}
                                    eliminarGasto={eliminarGasto}
                                />
                            ))}
                        </>
                        : <>
                            <h2>{gastos.lenght > 0 ? 'Gastos' : 'No hay Gastos'}</h2>
                            {gastos.map(gasto => (
                                <Gasto
                                    key={gasto.id}
                                    gasto={gasto}
                                    setGastoEditar={setGastoEditar}
                                    eliminarGasto={eliminarGasto}
                                />
                            ))}
                        </>
                }
            </div>
        </>
    )
}