import "./modal.scss"

export const Modal = ({setIsOpen,children}) =>{

    return(
        <div className="modalOverlay" role="dialog">
            <div className="modalBox">
                <button className="closeButton" onClick={() => setIsOpen(false)}>Fechar</button>
                {children}
            </div>
        </div>
    )
}
export default Modal