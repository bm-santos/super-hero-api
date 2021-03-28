import { call, put } from "redux-saga/effects"

import { getHeroesSuccess, getHeroesError } from "./actions"
import HeroesService from '../../../services/heroes-service'

export function* getHeroes(action: any) {

  try {
    const response = yield call(HeroesService.getHeroes, action.payload)
    yield put(getHeroesSuccess(response))

  } catch (err) {
    yield put(getHeroesError())
  }
}
