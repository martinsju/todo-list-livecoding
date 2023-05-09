import React, { createContext, useContext, useState } from 'react'
import { useApi } from '../../hooks/useApi.js'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
	const [user, setUser] = useState()
	const [isLoading, setIsLoading] = useState(false)

	const api = useApi()

	async function signin(email, password) {
		const data = await api.signin(email, password)
		if (data.user) {
			setUser(data.user)
			// localStorage.setItem('userKey', JSON.stringify(data.user))
			console.log('context signin')

			return true
		}
		return false
	}

	async function signup(email, password) {
		const data = await api.signup(email, password)
		console.log('context signup')
		if (data.user) {
			setUser(data.user)
			// localStorage.setItem('userKey', JSON.stringify(data.user))

			return true
		}
		return false
	}

	async function signout() {
		await api.signout()
		setUser(null)
		Storage('userKey')
		// localStorage.clear()
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
