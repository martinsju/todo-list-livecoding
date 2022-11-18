import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/Auth/AuthContext'
import { routes } from '../../config/routes'
import * as C from './styled.js'

export function LogoutButton() {
	const auth = useContext(AuthContext)
	const navigate = useNavigate()

	function handleLogout() {
		auth.signout()
		navigate(routes.login.path)
	}

	return <C.LogoutButton onClick={handleLogout}>Logout</C.LogoutButton>
}
