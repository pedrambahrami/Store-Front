import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_LARAVEL_BASE_URL,
  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'},
  timeout: 100000,
})
console.log(import.meta.env)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
