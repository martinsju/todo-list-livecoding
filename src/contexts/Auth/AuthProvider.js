import React from 'react'
import { useState } from 'react'
import { AuthContext } from './AuthContext'
import useApi from '../../hooks/useApi.js'

function AuthProvider({ children }) {
	const [user, setUser] = useState()
	const api = useApi()

	async function signin(email, password) {
		const data = await api.signin(email, password)
		if (data.user && data.token) {
			setUser(data.user)
			return true
		}
		return false
	}

	async function signout() {
		await api.signout()
		setUser(null)
	}

	return (
		<AuthContext.Provider value={{ user, signin, signout }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
