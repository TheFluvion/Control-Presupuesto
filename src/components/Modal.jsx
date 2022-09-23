import CerrarModal from '../img/cerrar.svg'

export default function Modal({setModal}) {


    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={CerrarModal} alt="cerrarModal" onClick={() => setModal(false)}/>
            </div>
        </div>
    )
}
