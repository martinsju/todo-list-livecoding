import React, { useState } from 'react'
import { AuthContext } from './AuthContext'

import { useApi } from '../../hooks/useApi.js'

export function AuthProvider({ children }) {
	const [user, setUser] = useState()
	const api = useApi()

	async function signin(email, password) {
		const data = await api.signin(email, password)
		if (data.user && data.token) {
			setUser(data.user)
			localStorage.setItem('userKey', JSON.stringify(data.user))
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
		<AuthContext.Provider value={{ user, signin, signout }}>
			{children}
		</AuthContext.Provider>
	)
}
