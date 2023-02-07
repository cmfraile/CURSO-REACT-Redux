import { createAsyncThunk } from "@reduxjs/toolkit"
import { pokemonApi } from "../../api/pokemon.api";
import pokemonSlice from "../slices/pokemonSlice" 

export const getPokemons = 
( page = 0 ) =>
async( dispatch:any, getState:any ) => {
    const { startLoadingPokemons , setPokemons } = pokemonSlice.actions ;
    dispatch( startLoadingPokemons() );
    const {data:pokemons} = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`);
    dispatch( setPokemons({pokemons,page:page+1}) )
}