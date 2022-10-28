import React from 'react'
import Button from '../Button/index.js'
import Input from '../Input/index.js'
import * as C from './styled.js'

function LoginPage() {
	return (
		<C.Container>
			<C.Title>Faça o login</C.Title>
			<C.InputContainer>
				<C.InputArea>
					<C.Label>Seu e-mail</C.Label>
					<Input placeholder='Digite seu melhor e-mail' />
				</C.InputArea>
				<C.InputArea>
					<C.Label>Sua senha</C.Label>
					<Input placeholder='Digite sua senha' type='password' />
				</C.InputArea>
			</C.InputContainer>
			<Button>Login</Button>
		</C.Container>
	)
}

export default LoginPage
