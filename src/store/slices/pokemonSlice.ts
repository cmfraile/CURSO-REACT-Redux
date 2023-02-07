import { createSlice } from '@reduxjs/toolkit';

const initialState = {page:0,pokemons:[],isLoading:false}
const pokemonSlice = createSlice({
    name:'pokemon',
    initialState,
    reducers:{
        startLoadingPokemons:(state,/* action */) => {
            state.isLoading = true ;
        },
        setPokemonms:(state,action) => {
            console.log(action);
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