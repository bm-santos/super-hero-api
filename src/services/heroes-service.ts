import axios from 'axios'

const HeroesService = {
   getHeroes: (hero: any) => axios.get(`https://superheroapi.com/api.php/3597642667020542/search/${hero}`)
}

export default HeroesService
