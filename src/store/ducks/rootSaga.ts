import {  takeLatest, all } from "redux-saga/effects"

import { HeroesTypes } from "./heroes/types"
import { getHeroes } from "./heroes/saga"

export default function* rootSaga() {
  return yield all([
    takeLatest(HeroesTypes.GET_HEROES_REQUEST, getHeroes),
  ])
}
