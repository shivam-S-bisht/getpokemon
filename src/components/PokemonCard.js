import "../css/styles.css"
import { Link} from "react-router-dom"

function PokemonCard({ name, id }) {

    return (
        <div className="pokemon-card centered bgred">
            <Link to={`/pokemon/${id}`}>
                <button>
                    <img src="/pokemon-card-back.jpg" />
                    <p>{name[0].toUpperCase() + name.slice(1).toLowerCase()}</p>
                </button>
            </Link>
        </div>
    )
}

export default PokemonCard