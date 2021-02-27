import { combineReducers } from "redux"

import heroes from './heroes'

const createRootReducer = () => combineReducers({
  heroes
})

export default createRootReducer
