import { pokemonReduxHook } from "../hooks/pokemonHook.redux";

export const PokemonApp = () => {

    const { pokemons , isLoading , page ,
            previous , next ,
            increment , decrement } = pokemonReduxHook();

    const disabledButton = (step:'previous'|'next'):boolean => {
        if(isLoading){return true}
        switch(step){
            case 'previous' : return !previous ;
            case 'next' : return !next ;
        }
    }

    return(
    <div className="container my-5">
        <div className="row"><div className="col">
        <h1>PokemonAPP</h1>
        <span>{page}</span>
        {   (pokemons.length > 0) &&
            <ul>{ pokemons.map((x,i) => (<li key={i}>{x}</li>)) }</ul>
        }
        </div></div>
        <div className="row"><div className="col">
        <button type="button" className="btn btn-primary m-2 w-25" onClick={decrement}
                disabled={disabledButton('previous')}> -1 </button>
        <button type="button" className="btn btn-primary m-2 w-25" onClick={increment}
                disabled={disabledButton('next')}> +1 </button>
        </div></div>
    </div>)
}

export default PokemonApp