import React, { createContext, useContext, useState, useEffect } from 'react'
import { useApi } from '../../hooks/useApi.js'
import { Storage } from '../../services/storage.js'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
	const [user, setUser] = useState()
	const [isLoading, setIsLoading] = useState(false)

	const api = useApi()

	useEffect(() => {
		const loggedUser = localStorage.getItem('user')
		if (loggedUser) {
			setUser(JSON.parse(loggedUser))
		}
	}, [])

	async function signin(email, password) {
		const data = await api.signin(email, password)
		if (data.user) {
			setUser(data.user)
			localStorage.setItem('user', JSON.stringify(data.user))
			console.log('context signin, user salvo')

			return true
		}
		return false
	}

	async function signup(email, password) {
		if (email && password) {
			const data = await api.signup(email, password)
			setUser(data.user)
			return true
		}
		return false
	}

	async function signout() {
		await api.signout()
		setUser(null)
		Storage.clear()
		console.log('You were logged out')
	}

	return (
		<AuthContext.Provider value={{ user, signin, signup, signout }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => {
	return useContext(AuthContext)
}
