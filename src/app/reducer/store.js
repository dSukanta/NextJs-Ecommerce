import { configureStore } from '@reduxjs/toolkit'
import  appReducer  from './slice'
export const store = configureStore({
  reducer: appReducer,
})