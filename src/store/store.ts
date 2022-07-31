import { configureStore } from '@reduxjs/toolkit'
import players from '../reducers/players';

export const store = configureStore({
  reducer: players
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch