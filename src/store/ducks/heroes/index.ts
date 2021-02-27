import { Reducer } from "redux"
import { HeroesTypes } from "./types"

const INITIAL_STATE: any = {
  heroesObject: {},
  loading: false
}

const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HeroesTypes.GET_HEROES_REQUEST:
      return { 
        ...state, 
        loading: true
      } 
    case HeroesTypes.GET_HEROES_SUCCESS:
      return { 
        ...state, 
        heroesObject: action.payload.data.results,
        loading: false
      } 
    case HeroesTypes.GET_HEROES_FAILURE:
      return { 
        ...state, 
        loading: false
      } 
    default:
      return state
  }
}

export default reducer
