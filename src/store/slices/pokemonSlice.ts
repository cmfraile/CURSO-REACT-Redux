import { createSlice } from '@reduxjs/toolkit';

interface pokemonState {page:number,pokemons:string[],isLoading:boolean,pagesAvailable:{previous:boolean,next:boolean}}
const initialState:pokemonState = {
    page:0,
    pokemons:[],
    isLoading:false,
    pagesAvailable:{previous:false,next:false}}
const pokemonSlice = createSlice({
    name:'pokemon',
    initialState,
    reducers:{
        startLoadingPokemons:({isLoading}) => {isLoading = true},
        setPokemons:(state,action) => {

            const { pagesAvailable , page , pokemons } = action.payload

            state.isLoading = false
            state.pagesAvailable = pagesAvailable;
            state.page = page;
            state.pokemons = pokemons;

        }
    },
});

export default pokemonSlice

// Action creators are generated for each case reducer function

//export default counterSlice.reducer
// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes