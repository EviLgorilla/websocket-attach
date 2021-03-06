import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'

const reducer = {
    user: userReducer,
}

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;