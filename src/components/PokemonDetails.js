import { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { getPokemonWithId } from "../utils/actions"
import CloseIcon from '@mui/icons-material/Close';

function PokemonDetails() {

    const powers = [
        "If this pokemon moved from your Bench to your active spot this attack will be 10x",
        "As long as this Pokémon is in the Active Spot, your opponent can’t play any Pokémon Tool cards from their hand.",
        "When it retracts its long neck into its shell, it squirts out water with vigorous force. ",
        "Your opponent’s Single Strike Pokémon’s attacks cost Colorless more.",
        "This attack does 30 more damage for each Lightning Energy attached to all of your Pokémon."
    ]

    const vmaxRule = [
        "When your Pokémon VMAX is Knocked Out, your opponent takes 3 Prize cards.",
        "Your opponent's Active Pokémon is now Burned.",
        "When your Pokémon V is Knocked Out, your opponent takes 2 Prize cards.",
        "When your Pokémon VMAX is Knocked Out, your opponent takes 3 Prize cards.",
        "During your next turn, this Pokémon can’t use Max Bolt."
    ]

    const { id } = useParams()
    const history = useHistory()

    const [pokemonImage, setPokemonImage] = useState("")
    const [pokemonName, setPokemonName] = useState("")
    const [hp, setHp] = useState(0)
    const [attack, setAttack] = useState(0)
    const [defence, setDefence] = useState(0)
    const [weight, setWeight] = useState(0)

    useEffect(function () {
        getPokemonWithId(id).then(res => {
            setPokemonImage(res.sprites.front_default)
            setPokemonName(res.name[0].toUpperCase() + res.name.slice(1).toLowerCase())
            setHp(res.stats[0].base_stat)
            setAttack(res.stats[1].base_stat)
            setDefence(res.stats[2].base_stat)
            setWeight(res.weight)
        })
    }, [])

    function chooseRandom(iterator) {
        const index = Math.floor(Math.random() * iterator.length);
        return iterator[index];
    }

    return (
        <div className="poke-details">
            <img className="card-image" src="/pokemon-details.png" alt="pokemon" />
            <img className="pos-absolute poke-image" src={pokemonImage} alt="pokemon" />
            <p className="pos-absolute poke-power">{chooseRandom(powers)}</p>
            <p className="pos-absolute poke-vmax">{chooseRandom(vmaxRule)}</p>
            <p className="pos-absolute poke-name">{pokemonName}</p>
            <p className="pos-absolute poke-hp">{hp}</p>
            <p className="pos-absolute poke-attack">{attack}</p>
            <p className="pos-absolute poke-defence">{defence}</p>
            <p className="pos-absolute poke-weight">{weight}</p>
            <CloseIcon className="pos-absolute close-icon" width={40} onClick={() => {
                console.log(history.length)
                if (history.length > 2) {
                    history.goBack()
                } else {
                    history.replace("/")
                }
            }} />
        </div>
    )
}

export default PokemonDetails