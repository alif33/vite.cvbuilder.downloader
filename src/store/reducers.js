import { combineReducers } from "@reduxjs/toolkit"
import { Blog, Example, Information } from "./api"
import { informationSlice } from "./information/slice"
import { sampleSlice } from "./sample/slice"

export const rootReducer = combineReducers({
  [Blog.reducerPath]: Blog.reducer,
  [Example.reducerPath]: Example.reducer,
  [Information.reducerPath]: Information.reducer,
  information: informationSlice.reducer,
  sample: sampleSlice.reducer,
})