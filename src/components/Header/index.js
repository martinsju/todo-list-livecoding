import React from 'react'
import { useAuth } from '../../contexts/Auth/AuthContext.js'
import { LogoutButton } from '../LogoutButton'
import * as C from './styled.js'

export function Header() {
	const auth = useAuth()

	return (
		<C.Container>
			<C.SectionLeft />
			<C.StyledLink to='/'>
				<C.Todo color='#BD93F9'>to</C.Todo>
				<C.Todo>do</C.Todo>
				<C.List>list</C.List>
			</C.StyledLink>
			<C.SectionRight>
				{auth.user && (
					<>
						{auth.user && (
							<C.Paragraph>Logged as {auth.user.email} | </C.Paragraph>
						)}
						<LogoutButton />
					</>
				)}
			</C.SectionRight>
		</C.Container>
	)
}
