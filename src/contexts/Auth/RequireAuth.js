import { Navigate } from 'react-router-dom'
import { routes } from '../../config/routes'
import { useAuth } from './AuthContext'

export function RequireAuth({ children }) {
	const auth = useAuth()

	if (!auth.user) {
		console.log("You're not logged in")
		// return <LoginPage />
		return <Navigate to={routes.login.path} />
	}
	console.log('Already logged in ', auth.user)
	return children
}
