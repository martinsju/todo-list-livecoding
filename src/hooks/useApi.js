import axios from 'axios'
import { useAuth } from '../contexts/Auth/AuthContext'

const api = axios.create({
	headers: {
		expire: ''
	},
	baseURL: 'http://localhost:3333' //process.env.REACT_APP_API
})

export function useApi() {
	return {
		signin: async (email, password) => {
			const response = await api.post('/login', { email, password })
			console.log('API signin ', response.data)
			return response.data

			// return {
			// 	user: { id: 3, name: 'Julia', email: 'email@gmail.com' },
			// 	token: '123456'
			// }
		},
		signup: async (email, password) => {
			console.log('entrou na api')
			const response = await api.post('/register', { email, password })
			console.log('API signup ', response.data)
			return response.data

			// return {
			// 	user: { id: 3, name: 'Julia', email: 'email@gmail.com' },
			// 	token: '123456'
			// }
		},
		signout: async () => {
			return
			// const response = await api.post('/logout')
			// return response.data
		}
		// refreshToken: async (id) => {
		// 	const response = await api.get(`/users/${id}`, { withCredentials: true })
		// 	console.log('entrou no refreshToken ', response)
		// 	console.log('refreshToken ', response.data)
		// 	return response

		//store token in memory and never in localStorage
		//should not be acessed by JS

		// return {
		// 	user: { id: 3, name: 'Julia', email: 'email@gmail.com' }
		// }
		// },
		// validateToken: async (token) => {
		// 	console.log('antigo token: ', token)
		// 	const response = await api.get('/login', { token })
		// 	console.log('novo token: ', response.data.accessToken)

		// 	if (token === response.data.accessToken) {
		// 		console.log('token validado')
		// 		return true
		// 	}
		// 	console.log('token nao validado')
		// 	return false
		// }
	}
}
