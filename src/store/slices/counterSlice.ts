import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface CounterState {value:number}
const initialState: CounterState = {value: 0}

const counterSlice = createSlice({name:'counter',initialState,
  reducers: {
    increment: (state) => {state.value += 1},
    decrement: (state) => {state.value -= 1},
    changeByAmount: (state, action: PayloadAction<number>) => {state.value += action.payload},
  },
});

export default counterSlice

// Action creators are generated for each case reducer function

//export default counterSlice.reducer
// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes