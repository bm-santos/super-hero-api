import api from './api'

const HeroesService = {
   getHeroes: (hero: any) => api.get(`/search/${hero}`)
}

export default HeroesService
