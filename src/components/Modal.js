import "../css/styles.css"

function Modal (props) {
    return (
        <div className="modal flex-centered">
            {props.children}
        </div>
    )
}

export default Modal