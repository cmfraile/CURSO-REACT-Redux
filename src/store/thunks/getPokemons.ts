import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonApi } from "../../api/pokemon.api";
import pokemonSlice from "../slices/pokemonSlice" 
import { AppDispatch, RootState } from "../store";

export const getPokemons = 
( page:number = 0 ) =>
async( dispatch:AppDispatch, getState:RootState ) => {
    const { startLoadingPokemons , setPokemons } = pokemonSlice.actions ;
    dispatch( startLoadingPokemons() );
    const {data} = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`);
    const pokemons = data.results.map((x:any) => x.name);
    dispatch(
        setPokemons({
            pokemons,page,
            pagesAvailable:{
                previous : (data.previous) ? true : false ,
                next : (data.next) ? true : false
            }
        })
    )
}