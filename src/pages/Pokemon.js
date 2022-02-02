import Modal from "../components/Modal"
import PokemonDetails from "../components/PokemonDetails"
import { useHistory } from "react-router-dom"
import { useEffect } from "react"



function Pokemon () {

    const history = useHistory()
    useEffect (()=>{
        document.body.style.overflowY = "hidden" 
        return (()=>{
            if (history.action == "POP") {
                document.body.style.overflowY = "scroll" 
            }
        })
    }) 

    return (
        <Modal>
            <PokemonDetails />
        </Modal>
    )
}

export default Pokemon