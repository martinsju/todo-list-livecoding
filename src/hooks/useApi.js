import axios from 'axios'

const api = axios.create({
	baseURL: process.env.REACT_APP_API
})

export function useApi() {
	return {
		validateToken: async (token) => {
			return {
				user: { id: 3, name: 'Julia', email: 'email@gmail.com' }
			}
			// const response = await api.post('/validate', { token })
			// return response.data
		},
		signin: async (email, password) => {
			return {
				user: { id: 3, name: 'Julia', email: 'email@gmail.com' },
				token: '123456'
			}
			// const response = await api.post('/login', { email, password })
			// return response.data
		},
		signout: async () => {
			return
			// const response = await api.post('/logout')
			// return response.data
		}
	}
}
