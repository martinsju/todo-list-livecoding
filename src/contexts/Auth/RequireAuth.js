import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './AuthContext'
import { routes } from '../../config/routes'

export function RequireAuth({ children }) {
	const auth = useContext(AuthContext)
	if (!auth.user) {
		console.log('user: ', auth.user)
		console.log("You're not logged in")
		// return <LoginPage />
		return <Navigate to={routes.login.path} />
	}
	return children
}
