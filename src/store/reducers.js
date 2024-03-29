import { combineReducers } from "@reduxjs/toolkit"
import { Information } from "./api"
import { informationSlice } from "./information/slice"
import { sampleSlice } from "./sample/slice"

export const rootReducer = combineReducers({
  [Information.reducerPath]: Information.reducer,
  information: informationSlice.reducer,
  sample: sampleSlice.reducer,
})