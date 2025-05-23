//axios instance
import axios from 'axios';

// Validate environment variable
if (!process.env.EXPO_PUBLIC_API_URL) {
  console.error('EXPO_PUBLIC_API_URL is not set in environment variables')
}

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || 'https://empresos-backend.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Log request for debugging in development
    if (__DEV__) {
      console.log(`Making request to: ${config.url}`)
    }
    return config
  },
  (error) => {
    console.error('Request error:', error)
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
)

export default api