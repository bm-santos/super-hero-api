import axios from "axios"

const baseApiURL = "https://superheroapi.com/api/3597642667020542/search"

const api = axios.create({
    baseURL: baseApiURL
})

export default api