import "../css/styles.css"

function PokemonCard ({name, id}) {
    return (
        <div className="pokemon-card centered bgred">
            <button>
                <img src="/pokemon-card-back.jpg" />
                <p>{name[0].toUpperCase() + name.slice(1).toLowerCase()}</p>
            </button>
        </div>
    )
}

export default PokemonCard