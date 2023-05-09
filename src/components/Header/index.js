import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext.js'
import { LogoutButton } from '../LogoutButton'
import * as C from './styled.js'

export function Header() {
	const auth = useContext(AuthContext)

	return (
		<C.Container>
			<C.Section />
			<C.StyledLink to='/'>
				<C.Todo color='#BD93F9'>to</C.Todo>
				<C.Todo>do</C.Todo>
				<C.List>list</C.List>
			</C.StyledLink>
			<C.Section>{auth.user && <LogoutButton />}</C.Section>
		</C.Container>
	)
}
