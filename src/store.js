import { configureStore } from '@reduxjs/toolkit'
import userReducer from './feature/users/UserSlice'
export const store = configureStore({
  reducer: {
    users: userReducer,
  },
})
