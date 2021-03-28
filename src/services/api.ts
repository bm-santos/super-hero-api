import axios from "axios"

const baseApiURL = "https://superheroapi.com/api.php/3597642667020542/"

const api = axios.create({
    baseURL: baseApiURL
})

export default api