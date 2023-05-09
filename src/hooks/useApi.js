import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:3333' //process.env.REACT_APP_API
})

export function useApi() {
	return {
		validateToken: async (token) => {
			const response = await api.post('/login', { token })
			console.log('API validateToken ', response.data)
			return response.data

			// return {
			// 	user: { id: 3, name: 'Julia', email: 'email@gmail.com' }
			// }
		},
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
	}
}
