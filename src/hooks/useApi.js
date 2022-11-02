import axios from 'axios'

const api = axios.create({
	baseURL: process.env.REACT_APP_API
})

function useApi() {
	return {
		validateToken: async (token) => {
			const response = await api.post('/validate', { token })
			return response.data
		},
		signin: async (email, password) => {
			const response = await api.post('/login', { email, password })
			return response.data
		},
		signout: async () => {
			const response = await api.post('/logout')
			return response.data
		}
	}
}

export default useApi
