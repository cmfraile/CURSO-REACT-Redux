import { configureStore } from '@reduxjs/toolkit'
import { todosApi } from '../api/todos.api'
import counterReducer from './slices/counterSlice'
import pokemonReducer from './slices/pokemonSlice'

export const store = configureStore({
  reducer: {
    'counter':counterReducer.reducer,
    'pokemon':pokemonReducer.reducer,
    [todosApi.reducerPath]:todosApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    todosApi.middleware
  )
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch