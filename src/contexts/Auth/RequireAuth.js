import { Navigate } from 'react-router-dom'
import { routes } from '../../config/routes'
import { useAuth } from './AuthContext'

export function RequireAuth({ children }) {
	const auth = useAuth()

	console.log('RODOU O REQUIRE AUTH')
	if (!auth.isLogged) {
		console.log("You're not logged in")
		return <Navigate to={routes.login.path} />
	}
	console.log("You're logged as", auth.user.email)
	return children
}
