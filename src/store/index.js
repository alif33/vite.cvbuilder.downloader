import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "./reducers"
import { Information } from "./api"

export const store = configureStore({ 
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({

    }).concat(Information.middleware)
})