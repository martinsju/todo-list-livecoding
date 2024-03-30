import { Navigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

export function RequireLogin({ children }) {
	const auth = useAuth()
	if (auth.user) {
		console.log('user: ', auth.user)
		console.log("You're already logged in")
		return <Navigate to='/' />
	}
	return children
}
