import { useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard'
import { getAllPokemon } from '../utils/actions'
import HandleError from '../utils/HandleError'
import Paginator from "../components/Paginator"
import "../css/styles.css"



function Landing() {

    const [pokemon, setPokemon] = useState([])
    const [page, setPage] = useState(0)
    const [limit, setLimit] = useState(20)
    const [prevApiLink, setPrevApiLink] = useState(null)
    const [nextApiLink, setNextApiLink] = useState(null)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(function () {
        setPage(parseInt(localStorage.getItem("page")??"0"))
        setLimit(parseInt(localStorage.getItem("limit")??"20"))
        setPrevApiLink(localStorage.getItem("prevApiLink"))
        setNextApiLink(localStorage.getItem("nextApiLink"))
    }, [])

    useEffect(function () {
        getAllPokemon(page * limit, limit).then(res => {
            if (res?.error) {
                setError(true)
                setErrorMessage(res.errorMessage)
                return
            }
            setPokemon(res.results)
            setPrevApiLink(res.previous)
            setNextApiLink(res.next)
            localStorage.setItem("page", page)
            localStorage.setItem("limit", limit)
            localStorage.setItem("prevApiLink", res.previous)
            localStorage.setItem("nextApiLink", res.next)

        })
        .catch(e => setError(true))
    }, [limit, page])

    function prevContent() {
        setPage(prevPage => prevPage - 1)
    }

    function nextContent() {
        setPage(prevPage => prevPage + 1)
    }

    if (error) {
        return <HandleError message={errorMessage.toString()} error={error} />
    }
    return (
        <div className='hero ta-centered'>
            <h1>Pokemon Center</h1>
            <div className='landing grid'>
                {
                    pokemon.map((res, idx) => <PokemonCard key={idx} name={res.name} id={page + idx + 1} />)
                }

            </div>
            <Paginator page={page + 1} prevApiLink={prevApiLink} nextApiLink={nextApiLink} setLimit={setLimit} limit={limit} prevContent={prevContent} nextContent={nextContent} />
        </div>
    )
}

export default Landing