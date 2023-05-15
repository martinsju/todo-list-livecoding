import React, { createContext, useContext, useState, useEffect } from 'react'
import { useApi } from '../../hooks/useApi.js'
import { Storage } from '../../services/storage.js'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
	const [user, setUser] = useState()
	const [isLogged, setIsLogged] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const api = useApi()

	useEffect(() => {
		const currentSession = JSON.parse(localStorage.getItem('user'))
		console.log('currentSession ', currentSession)
		if (currentSession && currentSession.accessToken) {
			console.log('tem user: ', currentSession.user)
			setUser(currentSession.user)
			setIsLogged(true)
		} else {
			console.log('nao tem user logado')
			setUser()
			setIsLogged(false)
		}
	}, [])

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
		if (user.accessToken) {
			// const response = await api.validateToken(user.accessToken)
			setIsLogged(true)
			return true
		}
		setIsLogged(false)
		console.log('user not logged in')
		return false
	}

	async function signin(email, password) {
		const data = await api.signin(email, password)
		if (data) {
			setUser(data.user)
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
			localStorage.setItem('user', JSON.stringify(data))
			return true
		}
		return false
	}

	async function signout() {
		await api.signout()
		setUser(null)
		localStorage.clear()
		console.log('You were logged out')
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				isLogged,
				setUser,
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
