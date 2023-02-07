import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPokemons } from "../store/thunks/getPokemons"

export const PokemonApp = () => {

    const dispatch = useDispatch<any>();

    useEffect(() => {
        dispatch( getPokemons() )
    },[])

    return(
    <div className="container my-5">
        <h1>PokemonAPP</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui nemo facere quidem? Est, incidunt illo.</p>
    </div>)
}

export default PokemonApp