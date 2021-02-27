/**
 * Action Types
 */
export enum HeroesTypes {
  GET_HEROES_REQUEST = '@users/GET_HEROES_REQUEST',
  GET_HEROES_SUCCESS = '@users/GET_HEROES_SUCCESS',
  GET_HEROES_FAILURE = '@users/GET_HEROES_FAILURE',
}


export interface Heroes {
  id: number,
  name: string
}

export interface HeroesArray {
  data?: Heroes[]
}