import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store/store"
import { getPokemons } from "../store/thunks/getPokemons";

export const pokemonReduxHook = (pageArgument:number = 0) => {

    const { page , 
            pokemons , 
            isLoading ,
            pagesAvailable } = useSelector((state:RootState) => state.pokemon);
    const { previous , next } = pagesAvailable ;

    const dispatch = useDispatch<any>();
    useEffect(() => { dispatch( getPokemons(pageArgument) )},[]);

    const crud = {
        increment:() => { if(!next){return}; dispatch( getPokemons(page+1) ) },
        decrement:() => { if(!previous){return}; dispatch( getPokemons(page-1) ) },
    }

    return({page,pokemons,isLoading,...pagesAvailable,...crud});

    

}