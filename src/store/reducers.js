import { combineReducers } from "@reduxjs/toolkit"
import { Information } from "./api"
import { informationSlice } from "./information/slice"

export const rootReducer = combineReducers({
  [Information.reducerPath]: Information.reducer,
  information: informationSlice.reducer
})