import { configureStore } from '@reduxjs/toolkit';
import apiSlice from './features/api/apiSlice';
import authReducer from './features/auth/authSlice';



const store = configureStore({
    reducer: {
        // all api reducers
        [apiSlice.reducerPath]: apiSlice.reducer,
        // auth reducers
        auth: authReducer,

        // dashboard reducers
        // course reducers
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})


export default store;