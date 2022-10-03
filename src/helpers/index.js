
export function generarId() {
    const random = Math.random().toString(36).substring(2)
    const fecha = Date.now().toString(36)

    return random + fecha
}


export function generarFecha(){
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    let fecha = new Date()
    return fecha.toLocaleDateString('es-ES', options)
}