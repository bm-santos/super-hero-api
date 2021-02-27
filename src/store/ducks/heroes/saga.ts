import { call, put } from "redux-saga/effects"

import { getHeroesSuccess, getHeroesError } from "./actions"
import HeroesService from '../../../services/heroes-service'
import toast from "react-hot-toast"

export function* getHeroes(action: any) {

  console.log('saga', action.payload)

  try {
    const response = yield call(HeroesService.getHeroes, action.payload)
    yield put(getHeroesSuccess(response))
    toast.success('Your heroes arrived!')
  } catch (err) {
    yield put(getHeroesError())
    toast.error('Ooops')
  }
}
