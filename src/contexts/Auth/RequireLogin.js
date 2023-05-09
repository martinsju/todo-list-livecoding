import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'

export function RequireLogin({ children }) {
	const auth = useContext(AuthContext)
	if (auth.user) {
		console.log('user: ', auth.user)
		console.log("You're already logged in")
		// return <ListPage />
		return <Navigate to='/' />
	}
	return children
}
