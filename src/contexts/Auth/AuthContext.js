import React, { createContext, useContext, useEffect, useState } from 'react'
import { useApi } from '../../hooks/useApi.js'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
	const [user, setUser] = useState()
	const [token, setToken] = useState()
	const [isLogged, setIsLogged] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const api = useApi()

	// const currentSession = JSON.parse(localStorage.getItem('user'))

	useEffect(() => {
		console.log('RODOU USEEFFECT DO AUTH')
		const currentSession = JSON.parse(localStorage.getItem('user'))
		console.log('currentSession ', currentSession)

		if (currentSession.accessToken) {
			console.log('tem user: ', currentSession.user)
			setUser(currentSession.user)
			setIsLogged(true)
		} else {
			console.log('nao tem user logado')
			setUser(null)
			setIsLogged(false)
		}
	}, [])

	async function signin(email, password) {
		const data = await api.signin(email, password)
		if (data) {
			setUser(data.user)
			setToken(data.accessToken)
			setIsLogged(true)
			localStorage.setItem('user', JSON.stringify(data))
			console.log('context signin, user salvo')

			return true
		}
		return false
	}

	async function signup(email, password) {
		if (email && password) {
			const data = await api.signup(email, password)
			setUser(data.user)
			setToken(data.accessToken)
			setIsLogged(true)
			localStorage.setItem('user', JSON.stringify(data))
			return true
		}
		return false
	}

	async function signout() {
		await api.signout()
		setUser(null)
		setToken(null)
		setIsLogged(false)
		localStorage.clear()
		console.log('You were logged out')
	}

	// async function refreshToken() {
	// 	//nao tem como refresh porque nao tem a feature no json-server-
	// 	//teria que salvar o token direto no user, mas nao estamos fazendo por questoes de segurança e boas praticas.
	// 	if (user.user) {
	// 		console.log('token', user.accessToken)
	// 		const data = await api.refreshToken(user.accessToken)
	// 		if (!!data) {
	// 			setUser((prev) => {
	// 				console.log('prev user: ', prev)
	// 				console.log('user token: ', user.accessToken)
	// 				return { ...prev, accessToken: data }
	// 			})
	// 			return true
	// 		}
	// 	}
	// 	alert('usuario nao logado')
	// 	return false
	// }

	//para saber se o user tem acesso àquela feature. Exemplo editar ou deletar algo.
	async function validateToken() {
		if (token) {
			// const response = await api.validateToken(user.accessToken)
			// setIsLogged(true)
			console.log('token é ', token)
			return token
		}
		// setIsLogged(false)
		// console.log('user not logged in')
		return false
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				isLogged,
				setUser,
				setIsLogged,
				validateToken,
				signin,
				signup,
				signout
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => {
	return useContext(AuthContext)
}
