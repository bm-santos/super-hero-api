import { action } from "typesafe-actions"
import { HeroesTypes } from "./types"

export const getHeroesRequest = (hero: any) => action(HeroesTypes.GET_HEROES_REQUEST, hero)
export const getHeroesSuccess = (heroes: any) => action(HeroesTypes.GET_HEROES_SUCCESS, heroes)
export const getHeroesError = () => action(HeroesTypes.GET_HEROES_FAILURE)
