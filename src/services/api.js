import axios from "axios"

const api = axios.create({
  baseURL: "https://divine-time.vercel.app/"
})

export default api
