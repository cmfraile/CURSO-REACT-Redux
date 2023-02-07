import { createAsyncThunk } from "@reduxjs/toolkit"
import pokemonSlice from "../slices/pokemonSlice" 

export const getPokemons = 
( page = 0 ) =>
async( dispatch:any, getState:any ) => {

    dispatch( pokemonSlice.actions.startLoadingPokemons() );
    
}